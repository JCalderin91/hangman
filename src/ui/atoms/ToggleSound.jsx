export const SoundOnOff = ({ state = true, ...attrs }) => {
  return (
    <svg
      width="29"
      height="24"
      viewBox="0 0 29 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...attrs}
    >
      {state ? (
        <path
          d="M23.25 3.25002C28.235 8.01002 28.265 16.0213 23.25 20.75M2 15.6988V8.30002C2 7.58252 2.56 7.00002 3.25 7.00002H7.7325C7.89792 6.99943 8.0615 6.96535 8.21339 6.89982C8.36527 6.8343 8.50232 6.73869 8.61625 6.61877L12.3663 2.38377C13.1538 1.56377 14.5 2.14502 14.5 3.30377V20.6963C14.5 21.8638 13.1375 22.44 12.355 21.6038L8.6175 17.3925C8.50324 17.2692 8.36481 17.1707 8.21084 17.1031C8.05686 17.0356 7.89063 17.0005 7.7225 17H3.25C2.56 17 2 16.4175 2 15.6988ZM19.5 7.62502C21.1662 9.84752 21.1662 14.1525 19.5 16.375V7.62502Z"
          stroke="#4D8AB7"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      ) : (
        <path
          d="M26.1161 16.6339C26.6043 17.1221 27.3957 17.1221 27.8839 16.6339C28.372 16.1457 28.372 15.3543 27.8839 14.8661L26.1161 16.6339ZM20.3839 7.36613C19.8957 6.87798 19.1043 6.87798 18.6161 7.36613C18.128 7.85429 18.128 8.64574 18.6161 9.1339L20.3839 7.36613ZM27.8839 9.1339C28.372 8.64574 28.372 7.85429 27.8839 7.36613C27.3957 6.87798 26.6043 6.87798 26.1161 7.36613L27.8839 9.1339ZM18.6161 14.8661C18.128 15.3543 18.128 16.1457 18.6161 16.6339C19.1043 17.1221 19.8957 17.1221 20.3839 16.6339L18.6161 14.8661ZM7.7325 7.00002L7.7325 8.25002L7.73694 8.25001L7.7325 7.00002ZM8.61625 6.61877L9.52248 7.47973C9.53254 7.46914 9.54241 7.45837 9.55209 7.44744L8.61625 6.61877ZM12.3663 2.38377L11.4647 1.51793C11.453 1.53009 11.4416 1.54248 11.4304 1.5551L12.3663 2.38377ZM12.355 21.6038L11.4201 22.4335C11.4274 22.4417 11.4348 22.4498 11.4423 22.4578L12.355 21.6038ZM8.6175 17.3925L9.5524 16.5628C9.5465 16.5561 9.54053 16.5496 9.53449 16.543L8.6175 17.3925ZM7.7225 17L7.72623 15.75H7.7225V17ZM27.8839 14.8661L20.3839 7.36613L18.6161 9.1339L26.1161 16.6339L27.8839 14.8661ZM26.1161 7.36613L18.6161 14.8661L20.3839 16.6339L27.8839 9.1339L26.1161 7.36613ZM3.25 15.6988V8.30002H0.75V15.6988H3.25ZM3.25 8.30002C3.25 8.2707 3.26046 8.25444 3.26731 8.24732C3.27067 8.24383 3.27133 8.24449 3.26719 8.24631C3.26203 8.24858 3.25523 8.25002 3.25 8.25002V5.75002C1.82383 5.75002 0.75 6.93888 0.75 8.30002H3.25ZM3.25 8.25002H7.7325V5.75002H3.25V8.25002ZM7.73694 8.25001C8.07115 8.24882 8.40165 8.17996 8.70853 8.04757L7.71825 5.75207C7.72135 5.75073 7.72468 5.75004 7.72806 5.75002L7.73694 8.25001ZM8.70853 8.04757C9.0154 7.91519 9.29228 7.72202 9.52248 7.47973L7.71002 5.7578C7.71235 5.75536 7.71515 5.75341 7.71825 5.75207L8.70853 8.04757ZM9.55209 7.44744L13.3021 3.21244L11.4304 1.5551L7.68041 5.7901L9.55209 7.44744ZM13.2678 3.2496C13.2783 3.23872 13.2816 3.23828 13.276 3.24127C13.2707 3.24414 13.2627 3.24716 13.2536 3.2488C13.2359 3.25199 13.2293 3.24774 13.2333 3.24949C13.2374 3.25126 13.2407 3.25436 13.2422 3.25656C13.2427 3.25723 13.244 3.25921 13.2454 3.26404C13.2468 3.26859 13.25 3.28091 13.25 3.30377H15.75C15.75 1.12989 13.108 -0.193173 11.4647 1.51793L13.2678 3.2496ZM13.25 3.30377V20.6963H15.75V3.30377H13.25ZM13.25 20.6963C13.25 20.7197 13.2467 20.7322 13.2454 20.7366C13.2439 20.7414 13.2427 20.7432 13.2423 20.7437C13.2411 20.7455 13.238 20.7485 13.2339 20.7502C13.2299 20.7519 13.2367 20.7477 13.2544 20.7511C13.2635 20.7528 13.2714 20.7559 13.2766 20.7588C13.282 20.7618 13.2784 20.7612 13.2677 20.7497L11.4423 22.4578C13.0737 24.2014 15.75 22.8877 15.75 20.6963H13.25ZM13.2899 20.774L9.5524 16.5628L7.6826 18.2222L11.4201 22.4335L13.2899 20.774ZM9.53449 16.543C9.30364 16.2938 9.02396 16.0948 8.71287 15.9584L7.70881 18.2479C7.70567 18.2465 7.70284 18.2445 7.70051 18.242L9.53449 16.543ZM8.71287 15.9584C8.40177 15.822 8.06592 15.751 7.72623 15.75L7.71877 18.25C7.71534 18.25 7.71195 18.2493 7.70881 18.2479L8.71287 15.9584ZM7.7225 15.75H3.25V18.25H7.7225V15.75ZM3.25 15.75C3.25523 15.75 3.26208 15.7515 3.26731 15.7538C3.27153 15.7556 3.27093 15.7563 3.2676 15.7529C3.26086 15.7458 3.25 15.7293 3.25 15.6988H0.75C0.75 17.0603 1.82306 18.25 3.25 18.25V15.75Z"
          fill="#888C8F"
        />
      )}
    </svg>
  );
};