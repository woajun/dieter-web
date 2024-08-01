import { Box, Link, Stack } from '@mui/material';
import { Text } from '../Text';
import { Row } from '../Row';

export const Footer = () => {
  return (
    <Box
      display={'flex'}
      justifyContent={'center'}
      paddingY={6}
      bgcolor={'rgba(56, 56, 56, 1)'}
      color={'rgba(255, 255, 255, 1)'}
    >
      <Stack flexGrow={1} maxWidth={1024} gap={1} paddingX={3}>
        <Stack gap={1}>
          <Row gap={1} justifyContent={'start'}>
            <Link color="inherit" underline="none" href="/privacy-policy">
              개인정보처리방침
            </Link>
            <Link color="inherit" underline="none" href="/terms-of-service">
              이용약관
            </Link>
            <Link
              color="inherit"
              underline="none"
              href="https://forms.gle/rkqGSnoudGp1YUhn6"
            >
              고객센터
            </Link>
          </Row>
          <Text bold>다이어터(DIETER)</Text>
          <Text fontWeight={300}>몸무게 운동 식단을 관리해보세요.</Text>
          <Text fontWeight={300}>연락처 woajun@naver.com</Text>
        </Stack>
      </Stack>
    </Box>
  );
};
