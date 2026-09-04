import { Dialog, Flex, IconButton, Tooltip } from "@radix-ui/themes"
import { PersonIcon } from "@radix-ui/react-icons"

const LoginButton = () => {

    return <Dialog.Trigger>
        <Flex gap="3" justify="end">
            <Flex width="64px" height="64px" align="center" justify="center">
                <Tooltip content="Login">
                    <IconButton radius="full" variant="soft">
                        <PersonIcon />
                    </IconButton>
                </Tooltip>
            </Flex>
        </Flex>
    </Dialog.Trigger>
}


export default LoginButton