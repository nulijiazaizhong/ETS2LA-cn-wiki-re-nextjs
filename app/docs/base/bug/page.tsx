import { Typography } from '@/components/Typography';

export default function BugPage() {
  return (
    <div className="prose dark:prose-invert max-w-none">
      <Typography variant="h1">问题总结</Typography>
      <Typography variant="p">
        这里总结了可能遇到的问题以及解决方案。
      </Typography>
    </div>
  );
}
