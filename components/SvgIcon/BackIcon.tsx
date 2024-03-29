interface BackIconProps {
  width: number;
  height: number;
  fill: string;
}

const BackIcon = ({ width, height, fill }: BackIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 25"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-60 group-hover:opacity-100"
  >
    <g id="chevron-left">
      <path
        id="Solid"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.7071 5.79289C16.0976 6.18342 16.0976 6.81658 15.7071 7.20711L10.4142 12.5L15.7071 17.7929C16.0976 18.1834 16.0976 18.8166 15.7071 19.2071C15.3166 19.5976 14.6834 19.5976 14.2929 19.2071L8.29289 13.2071C7.90237 12.8166 7.90237 12.1834 8.29289 11.7929L14.2929 5.79289C14.6834 5.40237 15.3166 5.40237 15.7071 5.79289Z"
        fill={fill}
        fillOpacity={1}
      />
    </g>
  </svg>
);

export default BackIcon;
