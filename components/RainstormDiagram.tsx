"use client";

import React, { useEffect, useRef, useState } from 'react';

interface Node {
  id: string;
  label: string;
  x: number;
  y: number;
  type: 'domain' | 'gmb' | 'backlink';
}

interface Edge {
  from: string;
  to: string;
  animated?: boolean;
}

export default function RainstormDiagram() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [nodes] = useState<Node[]>([
    {
      id: 'gmb',
      label: 'Google Maps Listing',
      x: 500,
      y: 250,
      type: 'gmb'
    },
    {
      id: 'domain',
      label: 'Your Business Domain',
      x: 200,
      y: 250,
      type: 'domain'
    },
    {
      id: 'gbp-brand',
      label: 'GBP Brand Signaling',
      x: 350,
      y: 120,
      type: 'backlink'
    },
    {
      id: 'domain-brand',
      label: 'Domain Brand Signaling',
      x: 200,
      y: 120,
      type: 'backlink'
    }
  ]);
  
  const [edges] = useState<Edge[]>([
    {
      from: 'domain',
      to: 'gmb',
      animated: true
    },
    {
      from: 'gbp-brand',
      to: 'gmb',
      animated: true
    },
    {
      from: 'domain-brand',
      to: 'domain',
      animated: true
    }
  ]);

  const [animationFrame, setAnimationFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationFrame((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    // Clear canvas with dark background
    ctx.fillStyle = '#0f172a';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw grid
    ctx.strokeStyle = 'rgba(148, 163, 184, 0.1)';
    ctx.lineWidth = 1;
    for (let i = 0; i < canvas.width; i += 40) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, canvas.height);
      ctx.stroke();
    }
    for (let i = 0; i < canvas.height; i += 40) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(canvas.width, i);
      ctx.stroke();
    }

    // Draw edges
    edges.forEach((edge) => {
      const fromNode = nodes.find(n => n.id === edge.from);
      const toNode = nodes.find(n => n.id === edge.to);
      
      if (fromNode && toNode) {
        const dx = toNode.x - fromNode.x;
        const dy = toNode.y - fromNode.y;
        const angle = Math.atan2(dy, dx);
        
        const nodeRadius = 50;
        const startX = fromNode.x + Math.cos(angle) * nodeRadius;
        const startY = fromNode.y + Math.sin(angle) * nodeRadius;
        const endX = toNode.x - Math.cos(angle) * nodeRadius;
        const endY = toNode.y - Math.sin(angle) * nodeRadius;

        // Draw arrow line
        const gradient = ctx.createLinearGradient(startX, startY, endX, endY);
        gradient.addColorStop(0, '#3b82f6');
        gradient.addColorStop(1, '#10b981');
        
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(startX, startY);
        ctx.lineTo(endX, endY);
        ctx.stroke();

        // Draw arrow head
        const headLength = 15;
        ctx.fillStyle = '#10b981';
        ctx.beginPath();
        ctx.moveTo(endX, endY);
        ctx.lineTo(
          endX - headLength * Math.cos(angle - Math.PI / 6),
          endY - headLength * Math.sin(angle - Math.PI / 6)
        );
        ctx.lineTo(
          endX - headLength * Math.cos(angle + Math.PI / 6),
          endY - headLength * Math.sin(angle + Math.PI / 6)
        );
        ctx.closePath();
        ctx.fill();

        // Animated flow particle
        if (edge.animated) {
          const particlePos = animationFrame / 100;
          const particleX = startX + (endX - startX) * particlePos;
          const particleY = startY + (endY - startY) * particlePos;
          
          ctx.shadowBlur = 15;
          ctx.shadowColor = '#3b82f6';
          ctx.fillStyle = '#60a5fa';
          ctx.beginPath();
          ctx.arc(particleX, particleY, 5, 0, Math.PI * 2);
          ctx.fill();
          ctx.shadowBlur = 0;
        }
      }
    });

    // Draw nodes
    nodes.forEach((node) => {
      const nodeRadius = 50;
      
      // Node background
      const gradient = ctx.createRadialGradient(
        node.x, node.y, 0,
        node.x, node.y, nodeRadius
      );
      
      if (node.type === 'gmb') {
        gradient.addColorStop(0, '#10b981');
        gradient.addColorStop(1, '#059669');
      } else if (node.type === 'domain') {
        gradient.addColorStop(0, '#3b82f6');
        gradient.addColorStop(1, '#2563eb');
      } else {
        gradient.addColorStop(0, '#8b5cf6');
        gradient.addColorStop(1, '#7c3aed');
      }

      ctx.fillStyle = gradient;
      ctx.beginPath();
      ctx.arc(node.x, node.y, nodeRadius, 0, Math.PI * 2);
      ctx.fill();

      // Node border
      ctx.strokeStyle = '#64748b';
      ctx.lineWidth = 2;
      ctx.stroke();

      // Node icon
      ctx.fillStyle = '#ffffff';
      ctx.font = 'bold 20px sans-serif';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      
      if (node.type === 'gmb') {
        ctx.fillText('📍', node.x, node.y - 5);
      } else if (node.type === 'domain') {
        ctx.fillText('🌐', node.x, node.y);
      } else {
        ctx.fillText('🎯', node.x, node.y);
      }

      // Node label
      ctx.fillStyle = '#e2e8f0';
      ctx.font = '12px sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(node.label, node.x, node.y + nodeRadius + 15);
    });

  }, [nodes, edges, animationFrame]);

  return (
    <div className="w-full bg-slate-900 rounded-xl p-4">
      <canvas
        ref={canvasRef}
        className="w-full h-[400px] rounded-lg"
        style={{ maxWidth: '100%' }}
      />
      <p className="text-center text-xs text-gray-500 mt-2">
        Interactive backlink flow visualization
      </p>
    </div>
  );
}