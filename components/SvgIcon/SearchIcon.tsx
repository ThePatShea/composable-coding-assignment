interface SearchIconProps {
  height: number;
  width: number;
  fill: string;
}

const SearchIcon = ({ height, width, fill }: SearchIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-60 hover:opacity-100"
  >
    <g id="search-md">
      <path
        id="Solid"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.33331 1.33331C4.0196 1.33331 1.33331 4.0196 1.33331 7.33331C1.33331 10.647 4.0196 13.3333 7.33331 13.3333C8.74999 13.3333 10.052 12.8423 11.0784 12.0212L13.5286 14.4714C13.7889 14.7317 14.211 14.7317 14.4714 14.4714C14.7317 14.211 14.7317 13.7889 14.4714 13.5286L12.0212 11.0784C12.8423 10.052 13.3333 8.74999 13.3333 7.33331C13.3333 4.0196 10.647 1.33331 7.33331 1.33331ZM2.66665 7.33331C2.66665 4.75598 4.75598 2.66665 7.33331 2.66665C9.91064 2.66665 12 4.75598 12 7.33331C12 9.91064 9.91064 12 7.33331 12C4.75598 12 2.66665 9.91064 2.66665 7.33331Z"
        fill={fill}
        fillOpacity="1"
      />
    </g>
  </svg>
);

export default SearchIcon;
