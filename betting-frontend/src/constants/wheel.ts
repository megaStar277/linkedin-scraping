// TODO: This should be dynamically pulled from the server
export const TOTAL_COUNTDOWN_SECS = 60

export const WHEEL_TICK_PATHS = [
  'M262 65.25h2.12V25.67h-4.24v39.6l2.12-.02Z',
  'm276.47 65.88 2.5-39.7-4.22-.28-2.5 39.71c1.4.07 2.8.17 4.22.27Z',
  'm288.76 67.08 4.98-39.29-4.2-.53-4.98 39.3c1.4.15 2.8.33 4.2.52Z',
  'm300.96 69.05 7.38-38.77-4.15-.78-7.38 38.76c1.39.25 2.77.52 4.15.8Z',
  'm312.98 71.95 9.85-38.34-4.1-1.06-9.85 38.35c1.37.33 2.74.69 4.1 1.05Z',
  'm324.83 75.5 12.22-37.61-4.04-1.31-12.21 37.61c1.35.43 2.69.86 4.03 1.31Z',
  'm336.4 79.83 14.57-36.79-3.94-1.56-14.56 36.78c1.32.5 2.64 1.03 3.93 1.57Z',
  'm347.7 84.85 16.84-35.8-3.83-1.8-16.84 35.8c1.28.59 2.56 1.2 3.83 1.8Z',
  'm358.64 90.58 19.07-34.66-3.73-2.04-19.06 34.68c1.25.66 2.5 1.33 3.72 2.02Z',
  'm369.2 97.02 21.22-33.43-3.57-2.26-21.21 33.42c1.2.74 2.39 1.5 3.57 2.27Z',
  'm379.36 104.08 23.27-32.03-3.43-2.5-23.26 32.04c1.15.81 2.29 1.64 3.42 2.49Z',
  'm389.03 111.77 25.25-30.49-3.26-2.73-25.25 30.52 3.26 2.7Z',
  'm398.21 120.04 27.12-28.84-3.1-2.9-27.1 28.85c1.03.95 2.07 1.91 3.08 2.89Z',
  'm406.85 128.88 28.88-27.1-2.9-3.11-28.87 27.11a191.4 191.4 0 0 1 2.9 3.1Z',
  'm414.93 138.23 30.52-25.25-2.7-3.26-30.48 25.25 2.66 3.26Z',
  'm422.42 148.06 32.03-23.26-2.5-3.43-32.02 23.27c.84 1.14 1.67 2.28 2.49 3.43Z',
  'm429.25 158.4 33.42-21.25-2.28-3.58-33.42 21.22a93.16 93.16 0 0 1 2.28 3.61Z',
  'm435.44 169.06 34.7-19.06-2.05-3.73-34.67 19.09c.68 1.22 1.36 2.46 2.02 3.7Z',
  'm440.94 180.13 35.8-16.84-1.8-3.83-35.8 16.84c.62 1.27 1.22 2.55 1.8 3.83Z',
  'm445.74 191.53 36.78-14.56-1.56-3.94-36.79 14.56c.54 1.3 1.07 2.62 1.57 3.94Z',
  'm449.8 203.2 37.63-12.23-1.32-4.02-37.61 12.22c.45 1.34.88 2.69 1.3 4.03Z',
  'm453.1 215.12 38.34-9.84-1.05-4.1-38.3 9.83 1.02 4.1Z',
  'm455.68 227.21 38.87-7.42-.77-4.15-38.9 7.4c.28 1.39.55 2.78.8 4.17Z',
  'm457.45 239.44 39.29-4.97-.54-4.2-39.28 4.97c.2 1.4.38 2.8.53 4.2Z',
  'm458.48 251.73 39.52-2.49-.26-4.23-39.53 2.5c.1 1.43.2 2.84.27 4.22Z',
  'M458.72 259.88c0 .7.03 1.41.03 2.12 0 .7 0 1.41-.03 2.12h39.61v-4.24h-39.61Z',
  'm458.21 276.47 39.53 2.49.26-4.24-39.52-2.48c-.07 1.41-.17 2.82-.27 4.23Z',
  'm456.92 288.76 39.28 4.98.54-4.2-39.29-4.98c-.16 1.4-.34 2.8-.53 4.2Z',
  'm454.88 300.95 38.9 7.4.8-4.16-38.88-7.41-.82 4.17Z',
  'm452.09 312.99 38.33 9.84 1.05-4.1-38.33-9.85-1.05 4.1Z',
  'm448.5 324.83 37.61 12.22 1.31-4.04-37.62-12.21c-.42 1.35-.85 2.69-1.3 4.03Z',
  'm444.17 336.4 36.79 14.57 1.56-3.94-36.78-14.56c-.5 1.32-1.03 2.64-1.57 3.93Z',
  'm439.15 347.7 35.8 16.84 1.8-3.83-35.8-16.84c-.59 1.28-1.2 2.56-1.8 3.83Z',
  'm433.42 358.64 34.69 19.07 2.04-3.73-34.68-19.06c-.68 1.25-1.36 2.5-2.05 3.72Z',
  'm426.98 369.2 33.43 21.22 2.27-3.57-33.43-21.22c-.74 1.21-1.5 2.4-2.27 3.58Z',
  'm419.92 379.36 32.03 23.27 2.5-3.43-32.04-23.27c-.81 1.15-1.64 2.3-2.49 3.43Z',
  'm412.23 389.03 30.49 25.25 2.7-3.26-30.52-25.25a129.5 129.5 0 0 1-2.67 3.26Z',
  'm403.96 398.21 28.87 27.12 2.9-3.1-28.88-27.1c-.95 1.03-1.91 2.07-2.89 3.08Z',
  'm395.12 406.85 27.1 28.88 3.11-2.9-27.11-28.87a191.4 191.4 0 0 1-3.1 2.9Z',
  'm385.77 414.93 25.25 30.52 3.26-2.7-25.25-30.49-3.26 2.67Z',
  'm375.94 422.42 23.26 32.02 3.43-2.49-23.27-32.03a166.7 166.7 0 0 1-3.43 2.5Z',
  'm365.64 429.25 21.2 33.42 3.58-2.28-21.21-33.4c-1.18.76-2.37 1.52-3.57 2.26Z',
  'm354.94 435.44 19.06 34.7 3.73-2.05-19.09-34.67c-1.22.68-2.46 1.36-3.7 2.02Z',
  'm343.87 440.94 16.84 35.8 3.83-1.8-16.84-35.8c-1.27.62-2.55 1.21-3.83 1.8Z',
  'm332.47 445.74 14.56 36.78 3.94-1.56-14.57-36.79c-1.29.54-2.61 1.07-3.93 1.57Z',
  'm320.8 449.8 12.22 37.63 4.03-1.32-12.22-37.61c-1.34.45-2.68.88-4.03 1.3Z',
  'm308.88 453.1 9.84 38.34 4.1-1.06-9.83-38.3c-1.37.35-2.73.7-4.1 1.03Z',
  'm296.79 455.68 7.41 38.86 4.16-.76-7.4-38.9c-1.39.28-2.78.55-4.17.8Z',
  'm284.56 457.45 4.97 39.29 4.2-.54-4.97-39.28c-1.4.2-2.8.38-4.2.53Z',
  'm272.27 458.48 2.49 39.52 4.23-.26-2.5-39.53c-1.43.1-2.84.2-4.22.27Z',
  'M262 458.75c-.7 0-1.41 0-2.12-.03v39.61h4.24v-39.61c-.7 0-1.41.03-2.12.03Z',
  'm247.53 458.21-2.49 39.53 4.24.26 2.48-39.52c-1.41-.07-2.82-.17-4.23-.27Z',
  'm235.24 456.92-4.98 39.28 4.2.54 4.98-39.29c-1.4-.16-2.8-.34-4.2-.53Z',
  'm223.05 454.88-7.4 38.9 4.16.79 7.41-38.87-4.17-.82Z',
  'm211.01 452.09-9.84 38.32 4.1 1.06 9.85-38.33-4.1-1.05Z',
  'm199.17 448.5-12.22 37.61 4.04 1.31 12.21-37.62c-1.34-.42-2.69-.85-4.03-1.3Z',
  'm187.6 444.17-14.57 36.79 3.94 1.56 14.56-36.78c-1.32-.5-2.64-1.03-3.94-1.57Z',
  'm176.3 439.15-16.84 35.8 3.83 1.8 16.84-35.8c-1.28-.59-2.56-1.2-3.83-1.8Z',
  'm165.36 433.42-19.07 34.66 3.74 2.04 19.06-34.68c-1.27-.66-2.5-1.35-3.73-2.02Z',
  'm154.8 426.98-21.22 33.43 3.57 2.27 21.25-33.43a96.28 96.28 0 0 1-3.6-2.27Z',
  'm144.64 419.92-23.27 32.03 3.43 2.5 23.27-32.03a166.7 166.7 0 0 1-3.43-2.5Z',
  'm134.97 412.23-25.25 30.49 3.26 2.7 25.25-30.52-3.26-2.67Z',
  'm125.79 403.96-27.12 28.87 3.1 2.9 27.12-28.88c-1.05-.95-2.09-1.91-3.1-2.89Z',
  'm117.15 395.12-28.88 27.1 2.9 3.11 28.87-27.11a191.4 191.4 0 0 1-2.9-3.1Z',
  'm109.07 385.77-30.52 25.25 2.7 3.26 30.51-25.25-2.69-3.26Z',
  'M101.58 375.93 69.55 399.2l2.5 3.43 32.02-23.27c-.84-1.13-1.67-2.28-2.48-3.43Z',
  'm94.75 365.63-33.42 21.22 2.27 3.57 33.43-21.21c-.78-1.18-1.54-2.37-2.28-3.58Z',
  'M88.56 354.94 53.86 374l2.05 3.73 34.67-19.09a259.3 259.3 0 0 1-2.02-3.7Z',
  'm83.06 343.87-35.8 16.84 1.8 3.83 35.8-16.84c-.62-1.27-1.22-2.55-1.8-3.83Z',
  'm78.26 332.47-36.78 14.56 1.56 3.94 36.79-14.57c-.54-1.29-1.07-2.61-1.57-3.93Z',
  'm74.2 320.8-37.62 12.21 1.3 4.04 37.62-12.22c-.45-1.34-.88-2.68-1.3-4.03Z',
  'm70.9 308.88-38.34 9.84 1.06 4.1L71.94 313c-.37-1.37-.72-2.73-1.05-4.1Z',
  'm68.32 296.79-38.86 7.41.76 4.16 38.9-7.4c-.28-1.39-.55-2.78-.8-4.17Z',
  'm66.55 284.56-39.29 4.97.54 4.2 39.28-4.97c-.2-1.4-.37-2.8-.53-4.2Z',
  'M65.52 272.27 26 274.76l.26 4.23 39.53-2.5c-.1-1.43-.2-2.84-.27-4.22Z',
  'M65.25 262v-2.12H25.67v4.24h39.61c0-.7-.03-1.41-.03-2.12Z',
  'm65.79 247.53-39.53-2.49-.26 4.24 39.52 2.48c.07-1.41.17-2.82.27-4.23Z',
  'm67.08 235.24-39.28-4.98-.54 4.2 39.29 4.98c.16-1.4.34-2.8.53-4.2Z',
  'm69.12 223.05-38.9-7.4-.79 4.16 38.87 7.41.82-4.17Z',
  'm71.94 211.01-38.32-9.84-1.06 4.1 38.33 9.85c.34-1.37.69-2.74 1.05-4.1Z',
  'm75.5 199.17-37.6-12.22-1.31 4.03L74.2 203.2c.43-1.34.86-2.69 1.31-4.03Z',
  'm79.83 187.6-36.79-14.57-1.56 3.94 36.78 14.56c.5-1.32 1.03-2.64 1.57-3.94Z',
  'm84.86 176.3-35.8-16.84-1.8 3.83 35.8 16.84c.58-1.28 1.18-2.56 1.8-3.83Z',
  'm90.58 165.36-34.66-19.08-2.04 3.74 34.68 19.06c.66-1.25 1.33-2.5 2.02-3.72Z',
  'm97.02 154.8-33.43-21.23-2.26 3.58 33.42 21.25c.74-1.24 1.5-2.43 2.27-3.6Z',
  'm104.08 144.64-32.03-23.27-2.5 3.43 32.04 23.27c.81-1.15 1.64-2.3 2.49-3.43Z',
  'm111.77 134.97-30.53-25.25-2.69 3.26 30.52 25.25c.9-1.07 1.8-2.16 2.7-3.26Z',
  'M120.04 125.79 91.2 98.67l-2.9 3.1 28.88 27.12a84.54 84.54 0 0 1 2.86-3.1Z',
  'm128.88 117.15-27.1-28.88-3.11 2.93 27.11 28.87c1.02-1 2.06-1.97 3.1-2.92Z',
  'm138.23 109.07-25.25-30.52-3.26 2.7 25.25 30.51 3.26-2.69Z',
  'M148.07 101.58 124.8 69.55l-3.43 2.5 23.28 32.03a150.3 150.3 0 0 1 3.42-2.5Z',
  'm158.4 94.75-21.25-33.42-3.57 2.27 21.21 33.43a93.9 93.9 0 0 1 3.61-2.28Z',
  'm165.36 90.58-19.07-34.66 3.74-2.04 19.06 34.68c-1.27.66-2.5 1.35-3.73 2.02Z',
  'm180.13 83.06-16.84-35.8-3.83 1.8 16.84 35.8a216.9 216.9 0 0 1 3.83-1.8Z',
  'm191.53 78.26-14.56-36.78-3.94 1.56 14.56 36.79c1.3-.54 2.62-1.07 3.94-1.57Z',
  'm203.2 74.2-12.21-37.62-4.04 1.3 12.22 37.62c1.34-.45 2.69-.88 4.03-1.3Z',
  'm215.12 70.88-9.84-38.3-4.1 1.05 9.83 38.3c1.37-.37 2.74-.72 4.1-1.05Z',
  'm227.21 68.33-7.42-38.88-4.15.77 7.4 38.9c1.4-.27 2.78-.55 4.17-.8Z',
  'm239.54 66.94-5.08-40.08-4.29.54 5.08 40.08c1.43-.2 2.86-.37 4.29-.54Z',
  'M251.73 65.52 249.24 26l-4.23.26 2.5 39.53c1.43-.1 2.84-.2 4.22-.27Z',
]