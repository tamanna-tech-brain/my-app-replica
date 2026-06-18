"use client";

import React from 'react';
import { AntdRegistry } from '@ant-design/nextjs-registry';
import { ConfigProvider, theme } from 'antd';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          algorithm: theme.darkAlgorithm,
          token: {
            colorPrimary: '#5eead4', // brand-blue / cyan
            colorInfo: '#5eead4',
            colorBgBase: '#09090b',
            colorBgContainer: '#111827',
            colorBgElevated: '#161b26',
            colorBorder: 'rgba(255,255,255,0.14)',
            colorBorderSecondary: 'rgba(255,255,255,0.08)',
            colorTextBase: '#f5f7ff',
            colorTextSecondary: '#a7b0c3',
            fontFamily: 'var(--font-geist-sans)',
            borderRadius: 12,
          },
          components: {
            Menu: {
              itemColor: '#a7b0c3',
              itemHoverColor: '#5eead4',
              itemSelectedColor: '#5eead4',
              itemBg: 'transparent',
              itemHoverBg: 'rgba(255, 255, 255, 0.05)',
              itemSelectedBg: 'rgba(94, 234, 212, 0.1)',
              itemBorderRadius: 8,
            },
            Modal: {
              contentBg: 'transparent',
              headerBg: 'transparent',
            },
            Drawer: {
              colorBgElevated: 'rgba(17, 24, 39, 0.6)',
            }
          }
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
}
