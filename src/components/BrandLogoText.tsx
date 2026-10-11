import React from 'react';

interface BrandLogoTextProps {
  className?: string;
  glow?: boolean;
  textColorBottom?: string;
}

export const BrandLogoText: React.FC<BrandLogoTextProps> = ({
  className = "w-[185px] sm:w-[220px] md:w-[250px] h-auto",
  glow = true,
  textColorBottom = "#f8fafc"
}) => {
  return (
    <svg
      viewBox="0 0 260 48"
      className={`${className} overflow-visible select-none shrink-0`}
      aria-label="FLT INFOTECH - Assistência Técnica em Santos"
    >
      {/* FLT INFOTECH - starts at x=0, ends at x=260 */}
      <text
        x="0"
        y="22"
        fill="#00ff01"
        fontSize="24.5"
        fontWeight="900"
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
        textLength="260"
        lengthAdjust="spacing"
        style={glow ? { filter: 'drop-shadow(0px 1px 6px rgba(0,255,1,0.45))' } : undefined}
      >
        FLT INFOTECH
      </text>

      {/* Assistência Técnica em Santos - starts at x=0, ends at x=260 */}
      <text
        x="0"
        y="43"
        fill={textColorBottom}
        fontSize="13.2"
        fontWeight="700"
        fontFamily="ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif"
        textLength="260"
        lengthAdjust="spacing"
      >
        Assistência Técnica em Santos
      </text>
    </svg>
  );
};
