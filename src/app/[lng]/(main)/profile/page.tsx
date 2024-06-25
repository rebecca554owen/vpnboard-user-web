'use client';

import { useState } from 'react';
import { userState } from '@/stores/user';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { useSnapshot } from 'valtio';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';

const FormSchema = z.object({
  password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
  re_password: z.string().min(8, {
    message: 'Password must be at least 8 characters.',
  }),
});

export default function Profile({ params: { lng } }: { params: { lng: string } }) {
  const { userInfo } = useSnapshot(userState);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      password: '',
      re_password: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {}

  async function setUserNotice(params: any) {}

  const [tg_id, setTgId] = useState('');

  return (
    <div className='grid gap-4 lg:grid-cols-2'>
      <Card>
        <CardHeader className='flex flex-row items-start bg-muted/50'>
          <CardTitle>通知设置</CardTitle>
        </CardHeader>
        <CardContent className='grid gap-4 p-6 text-sm'>
          <div className='grid gap-3'>
            <div className='font-semibold'>推送</div>
            <ul className='grid gap-3'>
              <li className='flex items-center justify-between'>
                <span className='text-muted-foreground'>TG Bot</span>
                <Switch />
              </li>
              <li className='flex items-center justify-between'>
                <Input
                  placeholder='Telegram ID'
                  onChange={(e) => {
                    setTgId(e.target.value);
                  }}
                />
                <Button
                  onClick={() => {
                    if (tg_id) {
                      setUserNotice({
                        tg_id,
                      });
                    }
                  }}
                >
                  绑定
                </Button>
              </li>
            </ul>
            <Separator className='my-2' />
            <div className='font-semibold'>通知事件</div>
            <ul className='grid gap-3'>
              <li className='flex items-center justify-between'>
                <span className='text-muted-foreground'>服务快到期</span>
                <Switch
                  onCheckedChange={(checked) => {
                    setUserNotice({
                      when_service_almost_expired: checked,
                    });
                  }}
                />
              </li>
              <li className='flex items-center justify-between'>
                <span className='text-muted-foreground'>交易成功</span>
                <Switch
                  onCheckedChange={(checked) => {
                    setUserNotice({
                      when_purchased: checked,
                    });
                  }}
                />
              </li>
              <li className='flex items-center justify-between'>
                <span className='text-muted-foreground'>余额变动</span>
                <Switch
                  onCheckedChange={(checked) => {
                    setUserNotice({
                      when_balance_changed: checked,
                    });
                  }}
                />
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader className='flex flex-row items-start bg-muted/50'>
          <CardTitle>账户设置</CardTitle>
        </CardHeader>
        <CardContent className='grid gap-4 p-6 text-sm'>
          <div className='grid gap-3'>
            <div className='font-semibold'>登录密码</div>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className='grid gap-6'>
                <FormField
                  control={form.control}
                  name='password'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type='password' placeholder='新密码' className='w-full' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='re_password'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input type='password' placeholder='重复新密码' {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className='size-full'>更新密码</Button>
              </form>
            </Form>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
