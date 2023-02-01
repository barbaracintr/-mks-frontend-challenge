import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export const Shimmer = () => {

  return (
    <Stack spacing={10} display='flex' alignItems='center' flexDirection='column' justifyContent='space-between' height='100vh'>
      <Skeleton variant="rectangular" height={100} width="100%" />
      <Skeleton animation="wave" variant="rectangular" width="60%" height={600} />
      <Skeleton variant="rectangular" height={50} width="100%" />
    </Stack>
  );
};