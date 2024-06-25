'use client';

import { InitialConfig } from '@/stores/config';
import { InitialUser } from '@/stores/user';
import { useMount } from 'ahooks';

export default function ConfigProvider(props: { children?: React.ReactNode }) {
  useMount(() => {
    InitialConfig();
    InitialUser();
  });

  return props.children;
}
