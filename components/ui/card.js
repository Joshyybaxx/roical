
import * as React from "react";

export function Card({ children, className = "" }) {
  return (
    <div className={`bg-neutral-900 rounded-lg shadow-lg ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={className}>{children}</div>;
}
