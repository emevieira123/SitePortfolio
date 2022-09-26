export function IconHTML(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      width={props.width ? props.width : "47"}
      height={props.height ? props.height : "53"}
      viewBox="0 0 47 53" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M46.5425 0L42.3023 47.5003L23.2428 52.7843L4.23565 47.5078L0 0H46.5425Z" fill="#EC3B3B" />
      <path d="M15.0287 15.5378H23.2713V9.71115H8.66089L8.80036 11.2744L10.2324 27.331H23.2713V21.5044H15.5612L15.0287 15.5378Z" fill="black" />
      <path d="M16.3417 30.2444H10.4927L11.309 39.393L23.2444 42.7064L23.2712 42.6989V36.6368L23.2457 36.6436L16.7565 34.8914L16.3417 30.2444Z" fill="black" />
      <path d="M23.251 27.331H30.4258L29.7495 34.8877L23.251 36.6417V42.7035L35.1959 39.393L35.2835 38.4086L36.6527 23.069L36.7949 21.5044H23.251V27.331Z" fill="black" />
      <path d="M23.251 15.5236V15.5378H37.3251L37.442 14.2282L37.7074 11.2744L37.8468 9.71115H23.251V15.5236Z" fill="black" />
    </svg>

  );
}
