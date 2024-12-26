import { FC, ReactNode } from 'react';
import {
  Tabs as _Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/Tabs';

type Props = {
  contents: ReactNode[];
  defaultValue: string;
  triggers: string[];
};

export const Tabs: FC<Props> = ({ defaultValue, triggers, contents }) => {
  return (
    <_Tabs
      className="nako-min-w-[400px]"
      defaultValue={defaultValue || triggers[0]}
    >
      <TabsList>
        {triggers.map((trigger) => (
          <TabsTrigger key={trigger} value={trigger}>
            {trigger}
          </TabsTrigger>
        ))}
      </TabsList>
      {contents.map((content, index) => (
        <TabsContent key={triggers[index]} value={triggers[index]}>
          {content}
        </TabsContent>
      ))}
    </_Tabs>
  );
};
