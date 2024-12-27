const Icons = {
  menu: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        x="4"
        y="8"
        width="16"
        height="2"
        className="dark:fill-white fill-text"
      />
      <rect
        x="4"
        y="14"
        width="16"
        height="2"
        className="dark:fill-white fill-text"
      />
    </svg>
  ),
  close: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="m22.357 20 8.8215 8.8215-2.357 2.357-10.471-10.471c-0.3905-0.3905-0.3905-1.0237 0-1.4142l10.471-10.471 2.357 2.357-8.8215 8.8215z"
        className="dark:fill-white fill-text"
      />
      <path
        d="m18.131 20-8.8215 8.8215 2.357 2.357 10.471-10.471c0.3905-0.3905 0.3905-1.0237 0-1.4142l-10.471-10.471-2.357 2.357 8.8215 8.8215z"
        className="dark:fill-white fill-text"
      />
    </svg>
  ),
  facebook: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M18.896 0H1.104C.494 0 0 .494 0 1.104v17.793C0 19.506.494 20 1.104 20h9.58v-7.745H8.076V9.237h2.606V7.01c0-2.583 1.578-3.99 3.883-3.99 1.104 0 2.052.082 2.329.119v2.7h-1.598c-1.254 0-1.496.597-1.496 1.47v1.928h2.989l-.39 3.018h-2.6V20h5.098c.608 0 1.102-.494 1.102-1.104V1.104C20 .494 19.506 0 18.896 0Z"
        fill="#191717"
      />
    </svg>
  ),
  github: (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 22 21" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11 .895C5.417.895.895 5.423.895 11c0 4.466 2.897 8.25 6.91 9.59.503.093.689-.217.689-.49 0-.242-.006-.875-.013-1.718-2.81.608-3.405-1.353-3.405-1.353-.46-1.166-1.123-1.476-1.123-1.476-.918-.627.068-.614.068-.614 1.011.074 1.551 1.042 1.551 1.042.9 1.545 2.364 1.098 2.94.838.093-.652.354-1.098.64-1.353-2.246-.254-4.603-1.123-4.603-4.993 0-1.105.39-2.004 1.042-2.711-.106-.255-.453-1.284.099-2.674 0 0 .85-.273 2.779 1.036A9.807 9.807 0 0 1 11 5.783a9.844 9.844 0 0 1 2.531.341c1.93-1.309 2.78-1.036 2.78-1.036.551 1.39.204 2.42.098 2.674.646.707 1.036 1.606 1.036 2.71 0 3.884-2.363 4.734-4.615 4.988.36.31.689.93.689 1.873 0 1.353-.013 2.438-.013 2.773 0 .273.18.583.695.484 4.014-1.34 6.904-5.124 6.904-9.584C21.105 5.423 16.583.895 11 .895Z"
        fill="#191717"
      />
    </svg>
  ),
  notFound: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 83 83"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <circle cx="37" cy="37" r="36.5" stroke="#D1D2D6" />
      <path d="M63 63L82.5 82.5" stroke="#D1D2D6" />
      <path
        d="M52.3283 49.959C48.6606 45.6979 43.2275 42.9998 37.1642 42.9998C31.1009 42.9998 25.6678 45.6979 22 49.959"
        stroke="#D1D2D6"
      />
      <circle cx="49.5" cy="27.5" r="1.5" fill="#D1D2D6" />
      <circle cx="24.5" cy="27.5" r="1.5" fill="#D1D2D6" />
    </svg>
  ),
  signOut: (props: React.SVGProps<SVGSVGElement>) => (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10 6L6 6L6 18H10V20H6C4.89543 20 4 19.1046 4 18V6C4 4.89543 4.89543 4 6 4H10V6ZM17.5856 13L13.2927 17.1339L14.707 18.4958L21.4141 12.0371L14.707 5.57837L13.2927 6.9402L17.5856 11.0741H8V13H17.5856Z"
        className="dark:fill-white fill-text"
      />
    </svg>
  ),
};

export default Icons;
