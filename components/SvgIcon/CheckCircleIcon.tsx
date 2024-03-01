interface CheckCircleIconProps {
  height: number;
  width: number;
}

const CheckCircleIcon: React.FC<CheckCircleIconProps> = ({ height, width }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="check-circle">
      <path
        id="Solid"
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M8.00008 0.666626C3.94999 0.666626 0.666748 3.94987 0.666748 7.99996C0.666748 12.05 3.94999 15.3333 8.00008 15.3333C12.0502 15.3333 15.3334 12.05 15.3334 7.99996C15.3334 3.94987 12.0502 0.666626 8.00008 0.666626ZM11.4715 6.47136C11.7318 6.21101 11.7318 5.7889 11.4715 5.52855C11.2111 5.26821 10.789 5.26821 10.5287 5.52855L7.00008 9.05715L5.47149 7.52855C5.21114 7.2682 4.78903 7.2682 4.52868 7.52855C4.26833 7.7889 4.26833 8.21101 4.52868 8.47136L6.52868 10.4714C6.78903 10.7317 7.21114 10.7317 7.47149 10.4714L11.4715 6.47136Z"
        fill="#81FFD9"
      />
    </g>
  </svg>
);

export default CheckCircleIcon;
