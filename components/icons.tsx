import React, { type PropsWithChildren } from 'react'

function Icon({ name, children }: PropsWithChildren<{ name: string }>) {
  return (
    <div role="image" aria-label={`${name} icon`}>
      {children}
    </div>
  )
}

export function CaretDown() {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Caret icon pointing down"
    >
      <path
        d="M5.15141 5.89258L0.802824 0.107407L9.5 0.107408L5.15141 5.89258Z"
        fill="#3F3F3F"
      />
    </svg>
  )
}

export function CaretUp() {
  return (
    <svg
      width="10"
      height="6"
      viewBox="0 0 10 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Caret icon pointing up"
      style={{ transform: 'rotate(180deg)' }}
    >
      <path
        d="M5.15141 5.89258L0.802824 0.107407L9.5 0.107408L5.15141 5.89258Z"
        fill="#3F3F3F"
      />
    </svg>
  )
}

export function PaperClip() {
  return (
    <svg
      width="16"
      height="18"
      viewBox="0 0 16 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Paper clip icon"
    >
      <path
        d="M4.24306 17.4288C3.27363 17.4288 2.33104 17.0518 1.60412 16.3247C0.904023 15.6246 0.5 14.682 0.5 13.6587C0.5 12.6624 0.876989 11.7198 1.60412 10.9927L8.17466 4.42217C8.60556 3.99127 9.17097 3.74896 9.79047 3.74896C10.4098 3.74896 10.9754 3.99127 11.4063 4.42217C12.2949 5.31081 12.2949 6.7649 11.4063 7.65354L5.53587 13.5509C5.2665 13.8202 4.83577 13.8202 4.59327 13.5509C4.32391 13.2815 4.32391 12.8508 4.59327 12.6083L10.4906 6.71095C10.8676 6.33396 10.8676 5.74152 10.4906 5.36452C10.1405 5.01439 9.52118 5.01439 9.14419 5.36452L2.54671 11.962C2.08895 12.4198 1.84662 13.0122 1.84662 13.6585C1.84662 14.3049 2.08893 14.8973 2.54671 15.3551C3.4893 16.2977 4.99725 16.2977 5.93965 15.3551L12.7256 8.56911C14.2606 7.03409 14.2606 4.55672 12.7256 3.04877C11.1906 1.51375 8.71323 1.51375 7.20529 3.04877L2.08888 8.16518C1.81951 8.43454 1.38878 8.43454 1.14628 8.16518C0.876922 7.89582 0.876922 7.46509 1.14628 7.22259L6.26269 2.10618C8.30921 0.0596602 11.6484 0.0596602 13.695 2.10618C15.7415 4.15269 15.7415 7.49187 13.695 9.53844L6.90898 16.3244C6.15498 17.0515 5.21253 17.4288 4.24306 17.4288Z"
        fill="#141414"
      />
    </svg>
  )
}

export function Plus() {
  return (
    <svg
      width="15"
      height="14"
      viewBox="0 0 15 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Plus icon"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.0997 7.58339C14.4218 7.58339 14.683 7.32223 14.683 7.00006C14.683 6.67789 14.4218 6.41673 14.0997 6.41673L8.08333 6.41673V0.400398C8.08333 0.0782318 7.82217 -0.182936 7.5 -0.182935C7.17783 -0.182935 6.91667 0.0782319 6.91667 0.400398L6.91667 6.41673L0.900337 6.41673C0.578171 6.41673 0.317004 6.67789 0.317004 7.00006C0.317003 7.32223 0.578171 7.58339 0.900337 7.58339L6.91667 7.58339L6.91667 13.5997C6.91667 13.9219 7.17783 14.1831 7.5 14.1831C7.82217 14.1831 8.08333 13.9219 8.08333 13.5997L8.08333 7.58339L14.0997 7.58339Z"
        fill="white"
      />
    </svg>
  )
}

export function TextBubble() {
  return (
    <svg
      width="15"
      height="16"
      viewBox="0 0 15 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Text bubble icon"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.25 2C2.05109 2 1.86032 2.07902 1.71967 2.21967C1.57902 2.36032 1.5 2.55109 1.5 2.75V12.9393L3.21967 11.2197C3.36032 11.079 3.55109 11 3.75 11H12.75C12.9489 11 13.1397 10.921 13.2803 10.7803C13.421 10.6397 13.5 10.4489 13.5 10.25V2.75C13.5 2.55109 13.421 2.36032 13.2803 2.21967C13.1397 2.07902 12.9489 2 12.75 2H2.25ZM0.65901 1.15901C1.08097 0.737053 1.65326 0.5 2.25 0.5H12.75C13.3467 0.5 13.919 0.737053 14.341 1.15901C14.7629 1.58097 15 2.15326 15 2.75V10.25C15 10.8467 14.7629 11.419 14.341 11.841C13.919 12.2629 13.3467 12.5 12.75 12.5H4.06066L1.28033 15.2803C1.06583 15.4948 0.743243 15.559 0.462987 15.4429C0.182732 15.3268 0 15.0533 0 14.75V2.75C0 2.15326 0.237053 1.58097 0.65901 1.15901Z"
        fill="#141414"
      />
    </svg>
  )
}

export function CircledX() {
  return (
    <svg
      width="21"
      height="20"
      viewBox="0 0 21 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Circled X icon"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.1768 20C4.65391 20 0.176758 15.5228 0.176758 10C0.176758 4.47715 4.65391 0 10.1768 0C15.6996 0 20.1768 4.47715 20.1768 10C20.1768 15.5228 15.6996 20 10.1768 20ZM10.1768 2C5.75848 2 2.17676 5.58172 2.17676 10C2.17676 14.4183 5.75848 18 10.1768 18C14.595 18 18.1768 14.4183 18.1768 10C18.1768 5.58172 14.595 2 10.1768 2ZM13.8839 6.29289C14.2744 6.68342 14.2744 7.31658 13.8839 7.70711L11.591 10L13.8839 12.2929C14.2744 12.6834 14.2744 13.3166 13.8839 13.7071C13.4933 14.0976 12.8602 14.0976 12.4697 13.7071L10.1768 11.4142L7.88386 13.7071C7.49334 14.0976 6.86018 14.0976 6.46965 13.7071C6.07913 13.3166 6.07913 12.6834 6.46965 12.2929L8.76254 10L6.46965 7.70711C6.07913 7.31658 6.07913 6.68342 6.46965 6.29289C6.86018 5.90237 7.49334 5.90237 7.88386 6.29289L10.1768 8.58579L12.4697 6.29289C12.8602 5.90237 13.4933 5.90237 13.8839 6.29289Z"
        fill="#3F3F3F"
      />
    </svg>
  )
}

export function Calendar() {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Calendar icon"
    >
      <path
        d="M10.8516 8.84852V10.5493C10.8516 10.7572 11.0216 10.9273 11.2295 10.9273C11.4374 10.9273 11.6074 10.7572 11.6074 10.5493V8.84852C11.6074 8.64063 11.4374 8.47058 11.2295 8.47058C11.0216 8.47045 10.8516 8.64064 10.8516 8.84852Z"
        fill="#3F3F3F"
      />
      <path
        d="M18.4111 8.84852V10.5493C18.4111 10.7572 18.5812 10.9273 18.7891 10.9273C18.997 10.9273 19.167 10.7572 19.167 10.5493V8.84852C19.167 8.64063 18.997 8.47058 18.7891 8.47058C18.5812 8.47045 18.4111 8.64064 18.4111 8.84852Z"
        fill="#3F3F3F"
      />
      <path
        d="M20.8112 9.7934H19.5449V10.7383C19.5449 11.1541 19.2048 11.4942 18.789 11.4942C18.3732 11.4942 18.0331 11.1541 18.0331 10.7383V9.7934H11.9855V10.7383C11.9855 11.1541 11.6454 11.4942 11.2296 11.4942C10.8139 11.4942 10.4737 11.1541 10.4737 10.7383V9.7934H9.18856C8.73495 9.7934 8.37598 10.1525 8.37598 10.606V20.7168C8.37598 21.1704 8.73509 21.5294 9.18856 21.5294H20.8113C21.2649 21.5294 21.6239 21.1703 21.6239 20.7168L21.624 10.606C21.624 10.1524 21.2649 9.7934 20.8115 9.7934H20.8112ZM12.3635 18.827C12.3635 19.0538 12.1744 19.2428 11.9477 19.2428H10.1333C9.90658 19.2428 9.71756 19.0538 9.71756 18.827V17.2017C9.71756 16.975 9.9066 16.786 10.1333 16.786H11.9477C12.1744 16.786 12.3635 16.975 12.3635 17.2017V18.827ZM12.3635 14.8583C12.3635 15.085 12.1744 15.2741 11.9477 15.2741H10.1333C9.90658 15.2741 9.71756 15.085 9.71756 14.8583V13.233C9.71756 13.0062 9.9066 12.8172 10.1333 12.8172H11.9477C12.1744 12.8172 12.3635 13.0062 12.3635 13.233V14.8583ZM16.3322 18.827C16.3322 19.0538 16.1432 19.2428 15.9164 19.2428H14.1021C13.8753 19.2428 13.6864 19.0538 13.6864 18.827V17.2017C13.6864 16.975 13.8755 16.786 14.1022 16.786H15.9166C16.1433 16.786 16.3323 16.975 16.3323 17.2017L16.3322 18.827ZM16.3322 14.8583C16.3322 15.085 16.1432 15.2741 15.9164 15.2741H14.1021C13.8753 15.2741 13.6864 15.085 13.6864 14.8583V13.233C13.6864 13.0062 13.8755 12.8172 14.1022 12.8172H15.9166C16.1433 12.8172 16.3323 13.0062 16.3323 13.233L16.3322 14.8583ZM20.301 18.827C20.301 19.0538 20.1119 19.2428 19.8852 19.2428H18.0708C17.8441 19.2428 17.6551 19.0538 17.6551 18.827V17.2017C17.6551 16.975 17.8441 16.786 18.0708 16.786H19.8852C20.1119 16.786 20.301 16.975 20.301 17.2017V18.827ZM20.301 14.8583C20.301 15.085 20.1119 15.2741 19.8852 15.2741H18.0708C17.8441 15.2741 17.6551 15.085 17.6551 14.8583V13.233C17.6551 13.0062 17.8441 12.8172 18.0708 12.8172H19.8852C20.1119 12.8172 20.301 13.0062 20.301 13.233V14.8583Z"
        fill="#3F3F3F"
      />
      <rect
        x="0.75"
        y="0.75"
        width="28.5"
        height="28.5"
        rx="14.25"
        stroke="#D7D7D7"
        strokeWidth="1.5"
        strokeDasharray="3 3"
      />
    </svg>
  )
}

export function ArrowUp() {
  return (
    <svg
      width="7"
      height="13"
      viewBox="0 0 7 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.82541 4.63589C7.05526 4.41014 7.05859 4.04081 6.83284 3.81096L3.91618 0.841263C3.80649 0.729586 3.65653 0.666676 3.5 0.666676C3.34347 0.666676 3.1935 0.729586 3.08382 0.841263L0.167155 3.81096C-0.0585893 4.04081 -0.0552624 4.41014 0.174586 4.63589C0.404436 4.86163 0.773767 4.8583 0.999511 4.62845L2.91667 2.67644L2.91667 11.75C2.91667 12.0722 3.17783 12.3333 3.5 12.3333C3.82217 12.3333 4.08333 12.0722 4.08333 11.75L4.08333 2.67644L6.00049 4.62845C6.22623 4.8583 6.59556 4.86163 6.82541 4.63589Z"
        fill="#292929"
      />
    </svg>
  )
}

export function Upload() {
  return (
    <svg
      width="11"
      height="12"
      viewBox="0 0 11 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.16732 6.2276C1.94157 6.45745 1.9449 6.82678 2.17475 7.05252C2.4046 7.27827 2.77393 7.27494 2.99967 7.04509L4.91683 5.09308L4.91683 11.25C4.91683 11.5721 5.178 11.8333 5.50016 11.8333C5.82233 11.8333 6.0835 11.5721 6.0835 11.25V5.09308L8.00065 7.04509C8.2264 7.27494 8.59573 7.27827 8.82558 7.05252C9.05542 6.82678 9.05875 6.45745 8.83301 6.2276L5.91634 3.2579C5.80666 3.14622 5.65669 3.08331 5.50016 3.08331C5.34363 3.08331 5.19367 3.14622 5.08398 3.2579L2.16732 6.2276ZM1.41683 1.33331C1.09466 1.33331 0.833496 1.07215 0.833496 0.74998C0.833496 0.427814 1.09466 0.166647 1.41683 0.166647H9.5835C9.90566 0.166647 10.1668 0.427814 10.1668 0.74998C10.1668 1.07215 9.90566 1.33331 9.5835 1.33331H1.41683Z"
        fill="#292929"
      />
    </svg>
  )
}
