import { Button, Dialog, Flex, Text, TextField } from "@radix-ui/themes"

const LoginDialog = () => {

    const handleClick = () => {
        console.log("save")
    }

    return <Dialog.Content maxWidth="450px">
        <Dialog.Title>Sign in</Dialog.Title>
        <Dialog.Description size="2" mb="4">
            Lo hacemos y ya vemos.
        </Dialog.Description>
        <Flex direction="column" gap="3">
            <label>
                <Text as="div" size="2" mb="1" weight="bold">
                    Username
                </Text>
                <TextField.Root
                    placeholder="Enter your username"
                />
            </label>
            <label>
                <Text as="div" size="2" mb="1" weight="bold">
                    Password
                </Text>
                <TextField.Root
                    type="password"
                    placeholder="Enter your password"
                />
            </label>
        </Flex>
        <Flex gap="3" mt="4" justify="end">
            <Dialog.Close>
                <Button variant="soft" color="gray">
                    Cancel
                </Button>
            </Dialog.Close>
            <Dialog.Close>
                <Button variant="surface" onClick={handleClick}>Save</Button>
            </Dialog.Close>
        </Flex>
    </Dialog.Content>
}

export default LoginDialog