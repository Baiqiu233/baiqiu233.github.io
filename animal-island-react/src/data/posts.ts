import type { BlogPost } from "../types";

export const posts: BlogPost[] = [
  {
    id: "test",
    title: "测试",
    date: "2026-06-27",
    tag: "博客更新",
    color: "app-pink",
    cover: "🌸",
    readTime: "1 分钟",
    legacyPath: "/2026/06/27/%E6%B5%8B%E8%AF%95/",
    excerpt:
      "这是一篇用于测试博客更新流程的文章。先用简单内容确认首页、归档、搜索和文章页面都能正常工作。",
    sections: [
      {
        heading: "为什么写这篇",
        paragraphs: [
          "先用一篇很短的文章确认静态博客还能正常更新：页面可以打开，首页能看到入口，归档里能找到记录，搜索索引也能收录内容。",
        ],
      },
      {
        heading: "接下来",
        paragraphs: [
          "如果这篇文章发布顺利，后面就可以把测试内容替换成真正的笔记、教程或者日常记录。",
        ],
      },
    ],
    takeaways: ["确认发布流程", "整理首页入口", "记录后续写作想法"],
  },
  {
    id: "openwrt-frp-moonlight",
    title: "Frp的应用",
    date: "2025-10-15",
    tag: "Openwrt",
    color: "app-teal",
    cover: "🌿",
    readTime: "3 分钟",
    legacyPath: "/2025/10/15/Openwrt%E7%9A%84%E8%BF%9C%E7%A8%8B%E7%AE%A1%E7%90%86/",
    excerpt:
      "Openwrt 远程管理、Frp 配置与 Moonlight 远程控制的一组实践记录。",
    sections: [
      {
        heading: "Openwrt 的远程管理",
        paragraphs: [
          "目标是在外网状态下访问 Openwrt 网页管理。前提是云服务器已经安装并设置完成 Frp。",
          "Openwrt 侧需要安装 luci-app-frpc，在服务面板中填写服务器 IP、端口、令牌和内网端口。",
        ],
      },
      {
        heading: "Moonlight 远程控制",
        paragraphs: [
          "在 Frp 服务端配置完成后，继续添加 Moonlight 需要的 TCP 与 UDP 端口映射。",
          "客户端添加云服务器地址后即可尝试远程连接。",
        ],
      },
    ],
    takeaways: ["先完成 Frp 服务端", "Openwrt 侧配置 frpc", "Moonlight 需要同时处理 TCP 和 UDP"],
  },
  {
    id: "ssh-to-windows",
    title: "其他设备ssh连接windows",
    date: "2025-10-14",
    tag: "Windows",
    color: "app-blue",
    cover: "💻",
    readTime: "1 分钟",
    legacyPath: "/2025/10/14/%E5%85%B6%E4%BB%96%E8%AE%BE%E5%A4%87ssh%E8%BF%9E%E6%8E%A5windows/",
    excerpt:
      "解决可能由 Windows 与 Mac 换行符不同导致的 ssh-copy-id 命令使用无效问题。",
    sections: [
      {
        heading: "处理方式",
        paragraphs: [
          "先生成密钥，然后在 Windows 用户目录的 .ssh 中新建 authorized_keys 文件。",
          "把访问设备的公钥内容复制进去，再检查 OpenSSH SSH Server 的配置并重启服务。",
        ],
      },
    ],
    takeaways: ["公钥写入 authorized_keys", "注意 Windows 路径", "修改配置后重启 SSH 服务"],
  },
  {
    id: "windows-webdav-drive",
    title: "windows网络驱动器无法映射",
    date: "2025-10-14",
    tag: "Windows",
    color: "app-yellow",
    cover: "🗂️",
    readTime: "1 分钟",
    legacyPath: "/2025/10/14/windows%E7%BD%91%E7%BB%9C%E9%A9%B1%E5%8A%A8%E5%99%A8%E6%97%A0%E6%B3%95%E6%98%A0%E5%B0%84/",
    excerpt:
      "通过调整 WebClient 注册表参数，让 Windows 网络驱动器支持 HTTP 和 HTTPS 映射。",
    sections: [
      {
        heading: "注册表与服务",
        paragraphs: [
          "在 WebClient 参数中把 BasicAuthLevel 的值改为 2，让它同时支持 HTTP 和 HTTPS。",
          "随后重启 webclient 服务，再重新映射网络驱动器。",
        ],
      },
    ],
    takeaways: ["BasicAuthLevel 设置为 2", "重启 WebClient", "重新映射网络驱动器"],
  },
  {
    id: "lammps",
    title: "lammps",
    date: "2025-10-14",
    tag: "分子模拟",
    color: "purple",
    cover: "🧪",
    readTime: "8 分钟",
    legacyPath: "/2025/10/14/lammps/",
    excerpt:
      "从单位制、维度、边界条件到分子动力学模拟命令的入门笔记。",
    sections: [
      {
        heading: "编写 in 文件",
        paragraphs: [
          "LAMMPS 输入文件需要先定义单位制、模拟维度、边界条件和邻居列表。",
          "不同体系使用不同的单位制，例如 real、metal、lj 等。",
        ],
      },
      {
        heading: "模拟对象与物理模型",
        paragraphs: [
          "根据研究对象选择 atom_style、pair_style、bond_style 等命令。",
          "随后通过 pair_coeff、bond_coeff 等参数定义具体相互作用。",
        ],
      },
    ],
    takeaways: ["先写清计算设置", "根据对象选择力场", "通过 fix 和 run 执行弛豫"],
  },
  {
    id: "other",
    title: "other",
    date: "2025-10-14",
    tag: "杂记",
    color: "brown",
    cover: "📒",
    readTime: "1 分钟",
    legacyPath: "/2025/10/14/other/",
    excerpt:
      "Windows IP 地址映射、重装系统后 SSH 登录信息清理、免密登录配置等零散记录。",
    sections: [
      {
        heading: "Windows IP 地址映射",
        paragraphs: [
          "编辑 hosts 文件，在最后添加 IP 和名称映射，保存后即可用名称代替 IP 地址。",
        ],
      },
      {
        heading: "SSH 免密登录",
        paragraphs: [
          "重装系统后可以用 ssh-keygen -R 清理旧登录信息，再重新生成和上传公钥。",
        ],
      },
    ],
    takeaways: ["hosts 可做本地域名映射", "旧 SSH 记录需要清理", "免密登录依赖 authorized_keys"],
  },
  {
    id: "systemd",
    title: "Systemd",
    date: "2025-10-14",
    tag: "Linux",
    color: "app-green",
    cover: "⚙️",
    readTime: "1 分钟",
    legacyPath: "/2025/10/14/Systemd/",
    excerpt:
      "systemctl 常用命令备忘：刷新、查看状态、启动、重启、停止、开机启动和禁用。",
    sections: [
      {
        heading: "基本命令",
        paragraphs: [
          "systemctl daemon-reload 用于刷新 systemd 配置。",
          "status、start、restart、stop、enable、disable 分别对应状态查看、启动、重启、停止、开机启动和取消开机启动。",
        ],
      },
    ],
    takeaways: ["修改服务后先 daemon-reload", "用 status 查看状态", "enable 负责开机启动"],
  },
  {
    id: "openlist",
    title: "openlist",
    date: "2025-10-14",
    tag: "自托管",
    color: "app-orange",
    cover: "🗃️",
    readTime: "3 分钟",
    legacyPath: "/2025/10/14/openlist/",
    excerpt:
      "OpenList 的一键脚本安装、手动安装、服务启动和开机自启动配置备忘。",
    sections: [
      {
        heading: "安装",
        paragraphs: [
          "可以通过官方脚本安装，也可以下载对应版本后手动上传到服务器。",
          "手动安装时需要解压、赋予执行权限、启动服务并设置管理员密码。",
        ],
      },
      {
        heading: "开机自启动",
        paragraphs: [
          "通过 systemd service 文件配置 WorkingDirectory、ExecStart 和 Restart 策略。",
        ],
      },
    ],
    takeaways: ["脚本安装更省事", "手动安装方便控制版本", "systemd 管理自启动"],
  },
  {
    id: "frp",
    title: "Frp",
    date: "2025-10-14",
    tag: "Frp",
    color: "yellow-green",
    cover: "🌉",
    readTime: "4 分钟",
    legacyPath: "/2025/10/14/Frp/",
    excerpt:
      "Frp 的应用场景、下载、服务端/客户端配置、启动方式和开机自启动笔记。",
    sections: [
      {
        heading: "应用场景",
        paragraphs: [
          "Frp 可以用于暴露内网服务，也可以辅助游戏联机等需要内网穿透的场景。",
        ],
      },
      {
        heading: "安装与配置",
        paragraphs: [
          "需要一台具有公网 IP 的云服务器，下载对应系统版本后分别配置 frps 和 frpc。",
          "服务端配置监听端口、令牌和开放端口；客户端配置服务器地址、本地端口和远程端口。",
        ],
      },
    ],
    takeaways: ["需要公网服务器", "服务端和客户端令牌保持一致", "远程端口需要放行防火墙"],
  },
];

export function getPostById(id: string) {
  return posts.find((post) => post.id === id);
}

export const tags = Array.from(new Set(posts.map((post) => post.tag)));
