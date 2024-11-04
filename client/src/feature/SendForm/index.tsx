import Button from "@mui/material/Button"

type SendFormProps = {
    key: string
}

type User = {
    email: string,
    password: string
}

export const SendForm: React.FC<SendFormProps> = ({ key }) => {
    const onSend = (): void => {
        const data: User = {email: "test", password: "123456"}
        const jsonData = JSON.stringify(data)

        localStorage.setItem(key, jsonData)
    }

    return <Button onClick={() => onSend()}>Text</Button>
}