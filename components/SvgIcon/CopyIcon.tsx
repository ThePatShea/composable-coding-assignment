interface CopyIconProps {
  height: number;
  width: number;
  fill: string;
}

const CopyIcon = ({ height, width, fill }: CopyIconProps) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 17 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-60 hover:opacity-100"
  >
    <g id="copy-03">
      <g id="Solid">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.94105 4.66669H9.05911C9.41053 4.66668 9.71372 4.66667 9.96343 4.68707C10.227 4.7086 10.4891 4.75615 10.7414 4.88468C11.1177 5.07642 11.4237 5.38238 11.6154 5.75871C11.744 6.01096 11.7915 6.27311 11.813 6.53667C11.8334 6.78638 11.8334 7.08954 11.8334 7.44096V12.5591C11.8334 12.9105 11.8334 13.2137 11.813 13.4634C11.7915 13.7269 11.744 13.9891 11.6154 14.2413C11.4237 14.6177 11.1177 14.9236 10.7414 15.1154C10.4891 15.2439 10.227 15.2914 9.96343 15.313C9.71373 15.3334 9.41058 15.3334 9.05918 15.3334H3.94107C3.58966 15.3334 3.28643 15.3334 3.03673 15.313C2.77317 15.2914 2.51102 15.2439 2.25877 15.1154C1.88244 14.9236 1.57648 14.6177 1.38473 14.2413C1.25621 13.9891 1.20866 13.7269 1.18713 13.4634C1.16672 13.2137 1.16674 12.9105 1.16675 12.559V7.44101C1.16674 7.08957 1.16672 6.78639 1.18713 6.53667C1.20866 6.27311 1.25621 6.01096 1.38473 5.75871C1.57648 5.38238 1.88244 5.07642 2.25877 4.88468C2.51102 4.75615 2.77317 4.7086 3.03673 4.68707C3.28644 4.66667 3.58963 4.66668 3.94105 4.66669Z"
          fill={fill}
          fill-opacity={1}
        />
        <path
          d="M13.0591 0.666688H7.94106C7.58963 0.666676 7.28644 0.666666 7.03673 0.687068C6.77317 0.708602 6.51102 0.756146 6.25877 0.884676C5.88245 1.07642 5.57649 1.38238 5.38474 1.75871C5.25621 2.01096 5.20866 2.27311 5.18713 2.53667C5.16884 2.76053 5.16696 3.02734 5.16677 3.33337L9.08733 3.33336C9.41308 3.33329 9.76629 3.3332 10.072 3.35818C10.418 3.38645 10.8752 3.45642 11.3467 3.69668C11.9739 4.01626 12.4839 4.5262 12.8034 5.1534C13.0437 5.62495 13.1137 6.08209 13.1419 6.42811C13.1669 6.73384 13.1668 7.08704 13.1668 7.4128L13.1667 11.3333C13.4728 11.3332 13.7396 11.3313 13.9634 11.313C14.227 11.2914 14.4891 11.2439 14.7414 11.1154C15.1177 10.9236 15.4237 10.6177 15.6154 10.2413C15.744 9.98908 15.7915 9.72694 15.813 9.46338C15.8334 9.21368 15.8334 8.91052 15.8334 8.55912V3.44101C15.8334 3.0896 15.8334 2.78637 15.813 2.53667C15.7915 2.27311 15.744 2.01096 15.6154 1.75871C15.4237 1.38238 15.1177 1.07642 14.7414 0.884676C14.4891 0.756146 14.227 0.708602 13.9634 0.687068C13.7137 0.666666 13.4105 0.666676 13.0591 0.666688Z"
          fill={fill}
          fill-opacity={1}
        />
      </g>
    </g>
  </svg>
);

export default CopyIcon;
