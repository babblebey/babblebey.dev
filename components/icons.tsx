import { 
  type LucideProps,
  type LucideIcon,
  X,
  FileDown 
} from "lucide-react"

export type Icon = LucideIcon;

export const Icons = {
  logo: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 190 190" version="1.1" 
      style={{shapeRendering:"geometricPrecision", textRendering:"geometricPrecision", fillRule:"evenodd", clipRule:"evenodd"}}
      {...props}
    >
      <g id="Layer_x0020_1">
        <g id="_323267072">
          <polygon className="#201E1E" points="38,151 1,151 1,189 39,189 39,152 76,152 76,189 114,189 114,152 151,152 151,189 189,189 189,151 152,151 152,114 38,114 "/>
          <polygon className="#201E1E" points="38,76 76,76 76,1 38,1 "/>
          <polygon className="#201E1E" points="114,76 152,76 152,1 114,1 "/>
        </g>
      </g>
    </svg>
  ),
  cancel: X,
  download: FileDown
}