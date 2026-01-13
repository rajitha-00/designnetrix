"use client";

import React from 'react';

interface StackItem {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  color: string;
}

interface ScrollStackProps {
  items: StackItem[];
  className?: string;
}

export default function ScrollStack({ items, className = '' }: ScrollStackProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      {items.map((item) => (
        <div key={item.id} className="mx-4">
          <div className="group  p-8 bg-black/60 backdrop-blur-md border border-white/20 rounded-xl hover:bg-black/70 hover:border-white/30 transition-all duration-300 cursor-pointer shadow-lg">
            <div className="flex items-start gap-4">
              <div
                className="flex-shrink-0 w-14 h-14 rounded-lg flex items-center justify-center border"
                style={{
                  backgroundColor: `${item.color}15`,
                  borderColor: `${item.color}30`,
                }}
              >
                <div className="grid grid-cols-3 gap-0.5">
                  {Array.from({ length: 9 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-1 h-1 rounded-full group-hover:bg-white transition-colors duration-300"
                      style={{ backgroundColor: item.color }}
                    />
                  ))}
                </div>
              </div>
              <div className="space-y-2 flex-1">
                <div className="flex items-center justify-between">
                  <h3
                    style={{ fontFamily: "var(--font-optft)" }}
                    className="text-xl font-bold text-white transition-colors duration-300"
                  >
                    {item.title}
                  </h3>
                  <span
                    style={{
                      fontFamily: "var(--font-sansbld)",
                      color: item.color,
                      backgroundColor: `${item.color}20`,
                      borderColor: `${item.color}30`
                    }}
                    className="text-sm font-medium px-3 py-1.5 rounded border"
                  >
                    {item.badge}
                  </span>
                </div>
                <p
                  style={{ fontFamily: "var(--font-sansbld)" }}
                  className="text-base text-gray-200 leading-relaxed"
                >
                  {item.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}