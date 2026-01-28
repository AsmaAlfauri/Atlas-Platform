import { useSelector } from 'react-redux';
import { RootState } from '../store/configureStore';

export function useFeature(feature: string): boolean {
  const enabledFeatures = useSelector((state: RootState) => state.feature.enabledFeatures);
  return enabledFeatures.includes(feature);
}
