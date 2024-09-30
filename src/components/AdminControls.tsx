import DeleteChat from "./DeleteChat";
import InviteUser from "./InviteUser";

interface AdminControlsProps {
  chatId: string;
}

export default function AdminControls({ chatId }: AdminControlsProps) {
  return (
    <div className="m-5 mb-0 flex justify-end space-x-2">
      <InviteUser chatId={chatId} />
      <DeleteChat chatId={chatId} />
    </div>
  );
}
