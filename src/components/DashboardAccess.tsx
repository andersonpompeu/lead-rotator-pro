import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Settings } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export const DashboardAccess = () => {
  const navigate = useNavigate();
  const { user, isAdmin } = useAuth();

  const handleAccess = () => {
    if (!user) {
      navigate('/auth');
    } else if (isAdmin) {
      navigate('/dashboard');
    } else {
      navigate('/auth');
    }
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleAccess}
      className="fixed bottom-4 right-4 h-12 w-12 rounded-full bg-primary text-primary-foreground shadow-lg hover:bg-primary/90"
    >
      <Settings className="h-5 w-5" />
    </Button>
  );
};
