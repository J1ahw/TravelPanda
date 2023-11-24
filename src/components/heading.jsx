export function HeadingRow(value) {
  return(
    <h1 className="heading">
      {value.split("").map((char,index) => {
        if (char === " ") {
          return (
            <span className="space" key={index}>{char}</span>
          )
        } else {
          return (
            <span key={index}>{char}</span>
          )
        }
      })}
    </h1>
  )
}