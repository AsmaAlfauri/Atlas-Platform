import { useSelector } from 'react-redux';
import { RootState } from '../store/configureStore';

export function usePermission(permission: string): boolean {
  const permissions = useSelector((state: RootState) => state.permissions.permissions);
  return permissions.includes(permission);
}
