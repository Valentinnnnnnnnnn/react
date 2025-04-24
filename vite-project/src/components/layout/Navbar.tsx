import CreateButton from "../ui/Buttons/CreateButton";
import TasksButton from "../ui/Buttons/TasksButton";
import LogoutButton from "../ui/Buttons/LogoutButton";

function Navbar() {
    return (
        <>
        <CreateButton />
        <TasksButton />

        <LogoutButton />
        </>
    )
}

export default Navbar