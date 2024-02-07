import "./CardCustom.css"

interface CardProps {
  design: string
  Name: string
  Description: string
  byEmit: (data: {
    Name: string
    Description: string
  }) => void
}

export const CardCustom: React.FC<CardProps> = ({
  design,
  Name,
  Description,
  byEmit,
}) => {

  const truncateString = (chain: string): string => {
    //We truncate with ... any text exceeding the 10 length
    if (chain.length > 10) {
      return chain.substring(0, 10) + "..."
    }

    return chain
  }

  const handleClick = () => {
    byEmit({ Name, Description })
  }

  return (
    <div className={design} onClick={handleClick}>
      <div className="dinoName">{truncateString(Name)}</div>
      <div>{truncateString(Description)}</div>
    </div>
  )
}
