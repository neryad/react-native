import type { User } from "../interfaces/request.resposne";

interface Props {
  user: User;
}

export const UserRow = ({ user }: Props) => {
  return (
    <tr className="p-2">
      <td>
        <img
          src={user.avatar}
          className="rounded-full w-14"
          alt="user avatar"
        />
      </td>
      <td>
        {user.first_name} {user.last_name}
      </td>
      <td>{user.email}</td>
    </tr>
  );
};
