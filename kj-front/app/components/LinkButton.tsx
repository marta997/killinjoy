import { Button } from "@radix-ui/themes"
import { useNavigate } from 'react-router'

type LinkButonProps = {
  text: string,
  href: string,
  dark?: boolean
}

const LinkButton = ({ text, href }: LinkButonProps) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(href)
  }
  return <Button size="2" variant="surface" onClick={handleClick}>
    {text}
  </Button>
}

export default LinkButton