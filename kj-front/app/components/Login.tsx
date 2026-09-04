import { Dialog } from "@radix-ui/themes"
import LoginButton from "./LoginButton"
import LoginDialog from "./LoginDialog"

const Login = () => {
    return <Dialog.Root>
        <LoginButton />
        <LoginDialog />
    </Dialog.Root>
}


export default Login