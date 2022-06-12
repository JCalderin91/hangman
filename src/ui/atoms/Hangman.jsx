export const Hangman = ({ intents }) => {
  return (
    <svg
      width="100"
      height="150"
      viewBox="0 0 636 808"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {intents <= 0 ? (
        // left-leg
        <path
          d="M471.287 409.439C462.664 414.215 456.058 421.315 448.574 427.599C438.281 436.241 426.996 443.423 417.131 452.602C411.065 458.247 405.349 462.855 401.073 469.981C397.985 475.127 394.476 479.558 390.888 484.287C387.039 489.362 381.521 494.178 376.231 497.705"
          stroke="#343434"
          strokeWidth="38"
          strokeLinecap="round"
        />
      ) : null}
      {intents <= 1 ? (
        // right-leg
        <path
          d="M477.106 409.439C493.449 418.668 507.811 431.414 521.024 444.627C528.754 452.357 536.327 460.276 544.464 467.583C548.736 471.418 553.246 475.292 556.696 479.922C561.227 486.004 564.53 493.133 569.521 498.837C571.252 500.815 574.718 502.95 575.556 505.465"
          stroke="#343434"
          strokeWidth="38"
          strokeLinecap="round"
        />
      ) : null}
      {intents <= 2 ? (
        // left-hand
        <path
          d="M465.467 322.144C451.298 324.197 437.478 330.417 424.406 336.047C415.216 340.004 406.229 344.541 396.816 347.955C388.567 350.947 380.114 353.382 371.705 355.877C366.386 357.454 360.829 358.184 355.593 359.999C353.33 360.784 351.153 361.512 348.803 361.939C347.031 362.261 342.759 363.881 342.283 365.307"
          stroke="#343434"
          strokeWidth="38"
          strokeLinecap="round"
        />
      ) : null}
      {intents <= 3 ? (
        // right-hand
        <path
          d="M480.986 318.264C499.162 327.577 517.687 337.071 537.27 343.133C549.358 346.874 560.499 351.659 572.162 356.577C580.668 360.165 589.397 363.589 597.704 367.624C600.046 368.762 602.15 370.343 604.547 371.396C606.595 372.295 608.904 372.406 610.933 373.336C612.698 374.145 614.465 374.881 616.294 375.491"
          stroke="#343434"
          strokeWidth="38"
          strokeLinecap="round"
        />
      ) : null}
      {intents <= 4 ? (
        // body
        <path
          d="M481.956 258.612C481.956 267.646 482.047 276.684 481.956 285.717C481.788 302.402 478.561 318.844 478.561 335.562C478.561 344.157 478.742 352.779 478.561 361.373C478.502 364.165 477.66 366.847 477.591 369.618C477.518 372.514 477.7 375.384 477.348 378.266C476.922 381.766 477.803 385.743 476.863 389.124C476.26 391.296 476.186 394.427 476.136 396.668C476.081 399.149 475.166 401.393 475.166 403.889C475.166 405.578 475.166 407.266 475.166 408.954"
          stroke="#343434"
          strokeWidth="38"
          strokeLinecap="round"
        />
      ) : null}
      {intents <= 5 ? (
        // head
        <path
          d="M487.291 158.707C480.199 158.707 473.471 158.479 466.545 160.108C459.729 161.712 453.476 165.237 446.822 167.41C443.445 168.513 440.557 170.536 437.608 172.502C435.026 174.224 431.5 176.268 429.633 178.861C427.763 181.458 426.641 184.493 424.621 187.051C422.735 189.44 422.489 191.908 421.119 194.488C418.767 198.915 418.424 204.645 418.424 209.549C418.424 213.91 418.367 219.161 420.364 223.155C423.473 229.373 426.136 236.278 431.33 241.126C434.853 244.414 438.942 246.941 443.374 248.805C447.472 250.529 451.878 252.814 456.172 253.924C467.534 256.863 480.254 257.642 491.925 257.642C499.922 257.642 511.481 259.689 517.844 253.547C522.799 248.766 528.239 244.447 530.562 237.758C531.776 234.26 531.424 230.553 531.424 226.9C531.424 223.08 531.607 219.208 531.316 215.396C530.624 206.327 529.328 196.813 525.496 188.453C523.929 185.034 521.272 182.319 519.38 179.103L519.303 178.973C517.881 176.553 516.648 174.457 514.234 172.772C510.913 170.454 506.648 169.329 502.918 167.814C496.451 165.187 489.68 163.938 482.926 162.587"
          stroke="#343434"
          strokeWidth="38"
          strokeLinecap="round"
        />
      ) : null}

      <path
        d="M150.933 20C152.527 29.7605 152.337 39.3083 152.337 49.1625C152.337 53.7964 151.639 58.9683 152.649 63.5099C153.663 68.073 156.383 74.1961 156.547 78.637C157.488 104.025 156.547 129.64 156.547 155.052V354.356C156.547 368.6 155.868 383.015 158.263 397.086C161.634 416.894 159.354 438.461 159.354 458.53V639.275C159.354 649.649 155.359 659.196 155.144 669.529C154.962 678.263 153.74 686.759 153.74 695.573C153.74 713.4 147.535 730.876 146.723 748.752C146.306 757.917 144.512 768.001 141.108 776.511M19 784.932H52.0613C67.6123 784.932 82.5535 787.739 98.2223 787.739C123.034 787.739 149.874 790.276 174.326 786.024C193.389 782.708 212.01 779.318 231.559 779.318H257.603C263.315 779.318 272.573 777.602 277.252 780.721M150.933 22.8071C165.673 23.1019 178.97 29.8249 193.508 29.8249C199.363 29.8249 206.782 30.8092 212.611 31.9302C217.966 32.9599 223.395 32.6319 228.83 32.6319C236.494 32.6319 243.998 35.7432 251.677 36.5307C264.894 37.8863 277.991 38.2461 291.288 38.2461C299.753 38.2461 308.051 39.6497 316.63 39.6497C322.451 39.6497 327.072 42.3027 332.77 42.4568C338.872 42.6217 345.889 43.4078 351.874 44.64C364.803 47.3019 377.046 50.6516 390.238 52.2036C397.943 53.1101 405.729 53.1673 413.474 53.7631C417.428 54.0672 420.606 56.0776 424.547 56.5702C431.074 57.3861 437.698 58.0803 444.274 58.9874C457.34 60.7896 470.328 62.1954 483.262 64.6016C489.547 65.7709 496.134 64.1502 502.443 64.9914C511.359 66.1802 501.099 79.0537 500.494 82.3798C499.748 86.4817 498.275 93.39 496.205 96.8831C493.268 101.841 496.12 107.648 494.49 112.946C491.433 122.879 493.969 138.072 487.784 146.319M298.305 49.4745C287.559 65.9102 280.461 84.816 268.207 100.314C260.614 109.917 254.768 120.636 246.374 129.555C235.93 140.652 227.493 153.052 217.836 164.721C210.375 173.736 200.974 182.851 192.182 190.609C187.289 194.926 184.534 199.253 180.408 203.864C175.897 208.905 169.074 222.111 162.162 222.111"
        stroke="#343434"
        strokeWidth="38"
        strokeLinecap="round"
      />
    </svg>
  );
};
