export type IconName =
  | "linkedin"
  | "git"
  | "github"
  | "python"
  | "googlegemini"
  | "openai"
  | "postgresql"
  | "nestjs"
  | "react"
  | "mongodb"
  | "amazonwebservices"
  | "redis"
  | "n8n"
  | "nodedotjs"
  | "typescript"
  | "javascript";

interface IconProps {
  iconName: IconName;
  className?: string;
  style?: React.CSSProperties;
}

export default function Icon({ iconName, style, className }: IconProps) {
  return <i style={style} className={`icon-${iconName} ${className ?? ""}`} />;
}
