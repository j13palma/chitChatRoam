import { generatePortalLink } from '@/utils/generatePortalLinks';

export default function ManageAccountButton() {
  return (
    <form action={generatePortalLink}>
      <button type='submit'>Manage Billing</button>
    </form>
  );
}
