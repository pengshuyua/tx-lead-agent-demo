const TODAY = new Date("2026-06-30T09:41:00");
const STORAGE_KEY = "tx_lead_agent_demo_state_v1";

if (new URLSearchParams(window.location.search).get("reset") === "1") {
  localStorage.removeItem(STORAGE_KEY);
}

const initialLeads = [
  {
    id: "lead-001",
    name: "北京师范大学",
    code: "pjl204892359",
    businessType: "销售自拓",
    leadStatus: "商机明确需求",
    feedbackStatus: "商机明确需求",
    acceptStatus: "接受",
    contactName: "向日葵",
    phone: "15810388038",
    owner: "晓宇",
    source1: "挖掘",
    source2: "手工上传",
    source3: "联系人挖掘",
    assignedAt: "2026-06-29T13:20:39",
    createdAt: "2026-05-13T13:00:39",
    visitAt: "2026-06-30T10:30:00",
    updatedAt: "2026-06-29T18:40:00",
    isNew: true,
    isPendingFeedback: false,
    note: "重点高校客户，关注智能营销和渠道协同。",
  },
  {
    id: "lead-002",
    name: "锤子科技有限公司",
    code: "pjl204892360",
    businessType: "销售自拓",
    leadStatus: "商机明确需求",
    feedbackStatus: "商机明确需求",
    acceptStatus: "接受",
    contactName: "诸葛亮",
    phone: "15810384455",
    owner: "晓宇",
    source1: "挖掘",
    source2: "手工上传",
    source3: "联系人挖掘",
    assignedAt: "2026-06-28T09:10:11",
    createdAt: "2026-05-14T11:22:39",
    visitAt: "2026-06-30T15:00:00",
    updatedAt: "2026-06-28T18:40:00",
    isNew: true,
    isPendingFeedback: false,
    note: "计划本周确认采购节奏。",
  },
  {
    id: "lead-003",
    name: "史丹利化有限公司",
    code: "pjl204892361",
    businessType: "销售自拓",
    leadStatus: "待跟进",
    feedbackStatus: "联系上线索，约拜访",
    acceptStatus: "退回",
    contactName: "王进",
    phone: "15810388038",
    owner: "晓宇",
    source1: "内部推荐",
    source2: "手工上传",
    source3: "联系人挖掘",
    assignedAt: "2026-06-20T08:15:00",
    createdAt: "2026-05-13T13:00:39",
    visitAt: "2026-07-01T09:30:00",
    updatedAt: "2026-06-12T12:00:00",
    isNew: false,
    isPendingFeedback: false,
    note: "电话多次未接，需补充退回原因。",
  },
  {
    id: "lead-004",
    name: "重庆电子科技大学",
    code: "pjl204892362",
    businessType: "销售自拓",
    leadStatus: "已关闭",
    feedbackStatus: "已经提供产品解决方案",
    acceptStatus: "退回",
    contactName: "向日葵",
    phone: "15810388038",
    owner: "晓宇",
    source1: "渠道推荐",
    source2: "批量导入",
    source3: "联系人挖掘",
    assignedAt: "2026-06-10T09:45:00",
    createdAt: "2026-05-12T13:00:39",
    visitAt: "2026-06-27T14:30:00",
    updatedAt: "2026-06-08T15:00:00",
    isNew: false,
    isPendingFeedback: false,
    note: "预算周期已错过，暂时关闭。",
  },
  {
    id: "lead-005",
    name: "问天科技",
    code: "pjl204892363",
    businessType: "渠道推荐",
    leadStatus: "未反馈",
    feedbackStatus: "未反馈",
    acceptStatus: "未反馈",
    contactName: "王进",
    phone: "15810381234",
    owner: "晓宇",
    source1: "推荐",
    source2: "L2指派",
    source3: "联系人补充",
    assignedAt: "2026-06-30T08:30:00",
    createdAt: "2026-06-30T08:30:00",
    visitAt: "2026-07-02T11:00:00",
    updatedAt: "2026-06-30T08:30:00",
    isNew: true,
    isPendingFeedback: true,
    note: "新指派渠道线索，等待 L1 首次反馈。",
  },
  {
    id: "lead-006",
    name: "水贝黄金市场",
    code: "pjl204892364",
    businessType: "Martech-标讯",
    leadStatus: "拜访客户中",
    feedbackStatus: "拜访线索中",
    acceptStatus: "接受",
    contactName: "黄市监",
    phone: "15810389901",
    owner: "晓宇",
    source1: "标讯",
    source2: "系统挖掘",
    source3: "活动名单",
    assignedAt: "2026-06-18T10:30:00",
    createdAt: "2026-06-15T09:30:00",
    visitAt: "2026-06-30T16:30:00",
    updatedAt: "2026-06-18T10:30:00",
    isNew: false,
    isPendingFeedback: false,
    note: "今日线下拜访，需带解决方案材料。",
  },
  {
    id: "lead-007",
    name: "联想智慧中国行",
    code: "pjl204892365",
    businessType: "智慧中国行",
    leadStatus: "待跟进",
    feedbackStatus: "商机模糊需求",
    acceptStatus: "接受",
    contactName: "李雷",
    phone: "15810381111",
    owner: "晓宇",
    source1: "活动",
    source2: "会后回收",
    source3: "问卷",
    assignedAt: "2026-06-03T14:00:00",
    createdAt: "2026-06-01T16:30:00",
    visitAt: "2026-07-03T14:00:00",
    updatedAt: "2026-06-05T14:00:00",
    isNew: false,
    isPendingFeedback: false,
    note: "超过 14 日未更新，需重新跟进。",
  },
  {
    id: "lead-008",
    name: "联想渠道服务部",
    code: "pjl204892366",
    businessType: "内部推荐",
    leadStatus: "已反馈",
    feedbackStatus: "线索需求内部讨论中",
    acceptStatus: "接受",
    contactName: "韩梅梅",
    phone: "15810382222",
    owner: "晓宇",
    source1: "内部推荐",
    source2: "L2指派",
    source3: "联系人补充",
    assignedAt: "2026-06-02T10:00:00",
    createdAt: "2026-06-02T10:00:00",
    visitAt: "2026-06-24T14:00:00",
    updatedAt: "2026-06-10T17:00:00",
    isNew: false,
    isPendingFeedback: false,
    note: "需要持续更新内部讨论结果。",
  },
  {
    id: "lead-009",
    name: "广州零售运营中心",
    code: "pjl204892367",
    businessType: "企业线索挖掘",
    leadStatus: "未反馈",
    feedbackStatus: "未反馈",
    acceptStatus: "未反馈",
    contactName: "陈晨",
    phone: "15810383333",
    owner: "晓宇",
    source1: "挖掘",
    source2: "L2指派",
    source3: "联系人挖掘",
    assignedAt: "2026-06-29T09:20:00",
    createdAt: "2026-06-29T09:20:00",
    visitAt: "2026-07-04T09:30:00",
    updatedAt: "2026-06-29T09:20:00",
    isNew: true,
    isPendingFeedback: true,
    note: "48 小时内需完成首次反馈。",
  },
  {
    id: "lead-010",
    name: "成都云智科技",
    code: "pjl204892368",
    businessType: "Martech-其他",
    leadStatus: "待跟进",
    feedbackStatus: "联系上线索，约拜访",
    acceptStatus: "接受",
    contactName: "赵敏",
    phone: "15810386666",
    owner: "晓宇",
    source1: "线上活动",
    source2: "系统分发",
    source3: "联系人补充",
    assignedAt: "2026-06-25T10:00:00",
    createdAt: "2026-06-24T16:30:00",
    visitAt: "2026-06-30T19:00:00",
    updatedAt: "2026-06-26T13:00:00",
    isNew: false,
    isPendingFeedback: false,
    note: "晚间电话跟进。",
  },
  {
    id: "lead-011",
    name: "上海智造工场",
    code: "pjl204892369",
    businessType: "渠道推荐",
    leadStatus: "已反馈",
    feedbackStatus: "已经提供产品解决方案",
    acceptStatus: "接受",
    contactName: "沈一",
    phone: "15810387777",
    owner: "晓宇",
    source1: "渠道推荐",
    source2: "L2指派",
    source3: "销售补充",
    assignedAt: "2026-06-22T10:00:00",
    createdAt: "2026-06-21T10:00:00",
    visitAt: "2026-07-05T15:00:00",
    updatedAt: "2026-06-24T11:00:00",
    isNew: false,
    isPendingFeedback: false,
    note: "解决方案已发出，等待客户确认。",
  },
  {
    id: "lead-012",
    name: "深圳商显生态",
    code: "pjl204892370",
    businessType: "销售自拓",
    leadStatus: "待跟进",
    feedbackStatus: "商机模糊需求",
    acceptStatus: "接受",
    contactName: "林琳",
    phone: "15810388888",
    owner: "晓宇",
    source1: "销售自拓",
    source2: "人工录入",
    source3: "联系人补充",
    assignedAt: "2026-06-05T11:00:00",
    createdAt: "2026-06-04T11:00:00",
    visitAt: "2026-06-16T11:00:00",
    updatedAt: "2026-06-11T10:00:00",
    isNew: false,
    isPendingFeedback: false,
    note: "超过 14 日未更新，需补充跟进记录。",
  },
];

const app = document.querySelector("#app");

let state = loadState();

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
    if (stored && Array.isArray(stored.leads)) {
      return {
        leads: stored.leads,
        newUnread: Number.isFinite(stored.newUnread) ? stored.newUnread : 128,
        messages: stored.messages || defaultMessages(),
        selectedDate: stored.selectedDate || "2026-06-30",
        calendarMode: stored.calendarMode || "week",
        filters: stored.filters || {},
        resultIds: stored.resultIds || [],
        resultLabel: stored.resultLabel || "",
        returnRoute: stored.returnRoute || "#/list/all",
        modal: null,
        toast: null,
      };
    }
  } catch (error) {
    console.warn("Failed to load demo state", error);
  }
  return {
    leads: initialLeads,
    newUnread: 128,
    messages: defaultMessages(),
    selectedDate: "2026-06-30",
    calendarMode: "week",
    filters: {},
    resultIds: [],
    resultLabel: "",
    returnRoute: "#/list/all",
    modal: null,
    toast: null,
  };
}

function defaultMessages() {
  return [
    {
      role: "assistant",
      text: "您好，我可以帮您查询线索、查看今日拜访计划，也可以快速定位待反馈或长期未更新线索。",
    },
  ];
}

function saveState() {
  const persisted = {
    leads: state.leads,
    newUnread: state.newUnread,
    messages: state.messages,
    selectedDate: state.selectedDate,
    calendarMode: state.calendarMode,
    filters: state.filters,
    resultIds: state.resultIds,
    resultLabel: state.resultLabel,
    returnRoute: state.returnRoute,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(persisted));
}

function setState(partial) {
  state = { ...state, ...partial };
  saveState();
  render();
}

function icon(name) {
  const attrs = 'viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"';
  const paths = {
    menu: '<path d="M4 6h16"/><path d="M4 12h16"/><path d="M4 18h16"/>',
    plus: '<path d="M12 5v14"/><path d="M5 12h14"/>',
    back: '<path d="m15 18-6-6 6-6"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.69 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.33 1.85.56 2.81.69A2 2 0 0 1 22 16.92z"/>',
    filter: '<path d="M22 3H2l8 9.46V19l4 2v-8.54L22 3z"/>',
    mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><path d="M12 19v3"/>',
    send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
    arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
    refresh: '<path d="M21 12a9 9 0 0 1-15.5 6.2"/><path d="M3 12A9 9 0 0 1 18.5 5.8"/><path d="M3 19v-6h6"/><path d="M21 5v6h-6"/>',
    calendar: '<path d="M8 2v4"/><path d="M16 2v4"/><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M3 10h18"/>',
    bell: '<path d="M10.27 21a2 2 0 0 0 3.46 0"/><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    chevronDown: '<path d="m6 9 6 6 6-6"/>',
    chevronUp: '<path d="m18 15-6-6-6 6"/>',
    x: '<path d="M18 6 6 18"/><path d="m6 6 12 12"/>',
  };
  return `<svg ${attrs}>${paths[name] || ""}</svg>`;
}

function statusBar() {
  return `
    <div class="status-bar">
      <span>9:41</span>
      <span class="status-icons">
        <span class="signal"><i></i><i></i><i></i></span>
        <span class="wifi"></span>
        <span class="battery"></span>
      </span>
    </div>
  `;
}

function topTabs() {
  return `
    ${statusBar()}
    <nav class="top-tabs">
      <div class="tab-left"><button class="icon-btn" data-action="open-menu" aria-label="菜单">${icon("menu")}</button></div>
      <div class="tab-center">
        <button class="active" data-action="go-home">同享</button>
        <button data-action="noop-tab">发现</button>
        <button data-action="noop-tab">应用</button>
      </div>
      <div class="tab-actions"><button class="icon-btn" data-action="simulate-push" aria-label="模拟新线索">${icon("plus")}</button></div>
    </nav>
  `;
}

function topNav(title, options = {}) {
  const right = options.filter
    ? `<button class="filter-link" data-action="open-filter">筛选 ${icon("filter")}</button>`
    : options.right || "";
  return `
    ${statusBar()}
    <nav class="top-nav">
      <div class="left"><button class="icon-btn" data-action="${options.back || "go-home"}" aria-label="返回">${icon("back")}</button></div>
      <div class="title">${title}</div>
      <div class="right">${right}</div>
    </nav>
  `;
}

function leadCountBy(predicate) {
  return state.leads.filter(predicate).length;
}

function isSameDate(iso, dateText) {
  if (!iso) return false;
  return iso.slice(0, 10) === dateText;
}

function daysBetween(a, b) {
  const first = new Date(a.slice(0, 10) + "T00:00:00");
  const second = new Date(b.slice(0, 10) + "T00:00:00");
  return Math.floor((second - first) / 86400000);
}

function isStaleLead(lead) {
  return daysBetween(lead.updatedAt, toDateKey(TODAY)) >= 14 && !["已关闭"].includes(lead.leadStatus) && lead.acceptStatus !== "退回";
}

function categoryTitle(category) {
  return {
    new: "新渠道线索",
    pending: "待反馈线索",
    feedback: "已反馈线索",
    stale: "长期未更新线索",
    all: "客户线索列表",
    results: "筛选线索列表",
  }[category] || "客户线索列表";
}

function categoryTag(category) {
  return {
    new: "新增渠道线索",
    pending: "待反馈",
    feedback: "已反馈",
    stale: "14日未更新",
    results: state.resultLabel || "智能体筛选",
  }[category] || "";
}

function getLeadsForCategory(category) {
  const leads = [...state.leads];
  let filtered;
  if (category === "new") filtered = leads.filter((lead) => lead.isNew);
  else if (category === "pending") filtered = leads.filter((lead) => lead.isPendingFeedback || lead.acceptStatus === "未反馈");
  else if (category === "feedback") filtered = leads.filter((lead) => ["已反馈", "待跟进", "商机明确需求", "拜访客户中"].includes(lead.leadStatus) && lead.acceptStatus === "接受");
  else if (category === "stale") filtered = leads.filter(isStaleLead);
  else if (category === "results") filtered = leads.filter((lead) => state.resultIds.includes(lead.id));
  else filtered = leads;

  const selected = state.filters.status;
  if (selected) {
    filtered = filtered.filter((lead) => lead.leadStatus === selected || lead.feedbackStatus === selected || lead.businessType === selected);
  }

  const byVisit = category === "results" && /拜访/.test(state.resultLabel);
  return filtered.sort((a, b) => {
    const first = byVisit ? a.visitAt : a.assignedAt;
    const second = byVisit ? b.visitAt : b.assignedAt;
    return byVisit ? new Date(first) - new Date(second) : new Date(second) - new Date(first);
  });
}

function homePage() {
  const pending = 32;
  const feedback = 50;
  const todayVisits = 5;
  const stale = 89;
  const newBadge = state.newUnread > 99 ? "99+" : String(state.newUnread);
  return `
    <div class="app-screen">
      <div class="scroll-page">
        ${topTabs()}
        <section class="hero">
          <div class="hero-row">
            <div>
              <div class="brand-mark" aria-hidden="true"></div>
              <div class="greeting">
                <h2>晓宇，早上好!</h2>
                <p>本周 PC 总销售额非常棒，加油~</p>
              </div>
            </div>
            <div class="mascot" aria-hidden="true"></div>
          </div>
        </section>

        <section class="summary-card" aria-label="商机线索数量">
          <div class="summary-head">
            <div class="summary-title"><span class="token">${icon("bell")}</span>商机/线索数量</div>
            <button class="new-pill" data-action="open-new">新增${newBadge}</button>
          </div>
          <div class="summary-grid">
            <button class="metric" data-route="#/list/pending"><span>待反馈</span><strong>${pending}</strong><span>个</span></button>
            <div class="summary-divider"></div>
            <button class="metric" data-route="#/list/feedback"><span>已反馈</span><strong>${feedback}</strong><span>个</span></button>
            <button class="metric" data-route="#/visits"><span>今日拜访</span><strong>${todayVisits}</strong><span>个</span></button>
            <button class="metric" data-route="#/list/stale"><span>长期未更新</span><strong>${stale}</strong><span>个</span></button>
          </div>
        </section>

        <div class="home-actions">
          <button class="prompt-action" data-route="#/agent">
            <span><span class="round-icon">${icon("search")}</span> 给我推送最新线索信息</span>
            ${icon("arrow")}
          </button>
          <button class="prompt-action" data-route="#/visits">
            <span><span class="round-icon">${icon("calendar")}</span> 查看我的本月拜访</span>
            ${icon("arrow")}
          </button>
        </div>

        <button class="change-batch" data-action="simulate-push">${icon("refresh")} 模拟 L2 指派新线索</button>
      </div>
      ${bottomInput({ placeholder: "发消息或点击说话...", routeToAgent: true })}
      ${toastMarkup()}
      ${modalMarkup()}
    </div>
  `;
}

function bottomInput({ placeholder, routeToAgent = false } = {}) {
  return `
    <div class="bottom-input">
      <div class="quick-strip">
        <button data-route="#/agent">人工客服</button>
        <button data-demo-query="查看待跟进的线索">功能2XX</button>
        <button data-demo-query="查本月拜访计划">功能3XX</button>
      </div>
      <form class="message-box" data-form="${routeToAgent ? "home-query" : "agent-query"}">
        <input name="query" autocomplete="off" placeholder="${placeholder || "发消息或按住说话..."}" />
        <button class="${routeToAgent ? "voice-btn" : "send-btn"}" type="submit" aria-label="${routeToAgent ? "语音" : "发送"}">
          ${routeToAgent ? icon("mic") : icon("send")}
        </button>
      </form>
    </div>
  `;
}

function leadCard(lead, options = {}) {
  const statusClass = lead.acceptStatus === "退回" ? "returned" : lead.leadStatus === "已关闭" ? "closed" : "";
  const statusText = lead.acceptStatus === "未反馈" ? "未反馈" : lead.acceptStatus;
  const actionBlock = options.actions
    ? `
      <div class="card-actions">
        <button class="outline-action" data-action="return-lead" data-id="${lead.id}">退回</button>
        <button class="primary-action" data-action="accept-lead" data-id="${lead.id}">立即接受</button>
      </div>`
    : "";
  return `
    <article class="lead-card ${options.compact ? "compact" : ""}" data-action="open-lead" data-id="${lead.id}">
      <button class="status-corner ${statusClass}" data-action="quick-status" data-id="${lead.id}">${statusText}</button>
      <h3>${lead.name}</h3>
      ${options.showCode ? row("线索编号", lead.code) : ""}
      ${row("业务类型", lead.businessType)}
      ${row("线索状态", displayLeadStage(lead))}
      <div class="lead-row contact">
        <span>第一联系人</span>
        <span>
          <button class="phone-call" data-action="dial" data-id="${lead.id}" aria-label="拨打 ${lead.contactName} ${lead.phone}">
            <span>${lead.contactName} ${lead.phone}</span><span class="phone-tap">${icon("phone")}</span>
          </button>
        </span>
      </div>
      ${actionBlock}
    </article>
  `;
}

function row(label, value) {
  return `<div class="lead-row"><span>${label}</span><span>${value}</span></div>`;
}

function displayLeadStage(lead) {
  if (lead.leadStatus === "已反馈" && lead.feedbackStatus && lead.feedbackStatus !== "已反馈") {
    return lead.feedbackStatus;
  }
  return lead.leadStatus;
}

function listPage(category) {
  const leads = getLeadsForCategory(category);
  const tag = categoryTag(category);
  const empty = category === "results" ? "暂未帮您找到相关线索，您可以尝试更换搜索条件。" : "当前没有符合条件的线索";
  return `
    <div class="app-screen">
      <div class="scroll-page">
        ${topNav(categoryTitle(category), { filter: true })}
        <main class="list-content ${tag ? "with-tags" : ""}">
          ${tag ? `<div class="filter-tags"><button class="tag" data-action="clear-category-filter">${tag}</button>${state.filters.status ? `<button class="tag" data-action="clear-status-filter">${state.filters.status} ×</button>` : ""}</div>` : ""}
          <section class="lead-list">
            ${leads.length ? leads.map((lead) => leadCard(lead, { compact: true })).join("") : `<div class="empty-state"><p><strong>暂无线索</strong>${empty}</p></div>`}
          </section>
        </main>
      </div>
      ${toastMarkup()}
      ${modalMarkup()}
    </div>
  `;
}

function visitPage() {
  const selected = state.selectedDate;
  const leads = state.leads
    .filter((lead) => isSameDate(lead.visitAt, selected))
    .sort((a, b) => new Date(a.visitAt) - new Date(b.visitAt));
  return `
    <div class="app-screen">
      <div class="scroll-page">
        ${topNav(`${formatTitleDate(selected)} 跟进计划`, { back: "go-home" })}
        ${calendarMarkup(selected)}
        <main class="list-content">
          <section class="lead-list">
            ${leads.length ? leads.map((lead) => leadCard(lead, { compact: true })).join("") : `<div class="empty-state"><p><strong>当日暂无待跟进线索</strong>切换日期可查看其他拜访计划。</p></div>`}
          </section>
        </main>
      </div>
      ${toastMarkup()}
      ${modalMarkup()}
    </div>
  `;
}

function calendarMarkup(selected) {
  const days = calendarDays(selected, state.calendarMode);
  return `
    <section class="calendar-panel" data-swipe-zone="calendar" aria-label="左右滑动切换周">
      <div class="calendar-weekdays">
        ${["周日", "周一", "周二", "周三", "周四", "周五", "周六"].map((d) => `<span>${d}</span>`).join("")}
      </div>
      <div class="calendar-grid">
        ${days.map((day) => {
          const key = toDateKey(day.date);
          const tasks = state.leads.filter((lead) => isSameDate(lead.visitAt, key));
          const dots = tasks.slice(0, 2).map((lead) => `<span class="dot ${new Date(lead.visitAt) < TODAY ? "expired" : ""}"></span>`).join("");
          const label = key === toDateKey(TODAY) && key === selected ? "今" : String(day.date.getDate());
          return `<button class="day-btn ${key === selected ? "active" : ""} ${day.dim ? "dim" : ""}" data-action="select-date" data-date="${key}">
            <span>${label}</span><span class="dot-row">${dots}</span>
          </button>`;
        }).join("")}
      </div>
      <button class="calendar-toggle" data-action="toggle-calendar" aria-label="切换日历视图">
        ${state.calendarMode === "week" ? icon("chevronDown") : icon("chevronUp")}
      </button>
    </section>
  `;
}

function calendarDays(selected, mode) {
  const current = new Date(selected + "T00:00:00");
  if (mode === "month") {
    const first = new Date(current.getFullYear(), current.getMonth(), 1);
    const start = new Date(first);
    start.setDate(first.getDate() - first.getDay());
    return Array.from({ length: 35 }, (_, index) => {
      const date = new Date(start);
      date.setDate(start.getDate() + index);
      return { date, dim: date.getMonth() !== current.getMonth() };
    });
  }
  const start = new Date(current);
  start.setDate(current.getDate() - current.getDay());
  return Array.from({ length: 7 }, (_, index) => {
    const date = new Date(start);
    date.setDate(start.getDate() + index);
    return { date, dim: false };
  });
}

function shiftCalendar(direction) {
  const current = new Date(state.selectedDate + "T00:00:00");
  if (state.calendarMode === "month") {
    current.setMonth(current.getMonth() + direction);
  } else {
    current.setDate(current.getDate() + direction * 7);
  }
  setState({ selectedDate: toDateKey(current) });
}

function agentPage() {
  return `
    <div class="app-screen">
      ${topTabs()}
      <main class="agent-content" id="agent-scroll">
        ${state.messages.map(renderMessage).join("")}
        <div class="suggestions">
          ${["查北京师范大学", "查看待跟进的线索", "查销售自拓", "查本月拜访计划", "查联系人王进", "查已反馈且本月拜访"].map((text) => `<button data-demo-query="${text}">${text}</button>`).join("")}
        </div>
      </main>
      ${bottomInput({ placeholder: "输入查询条件，例如：查本月拜访计划" })}
      ${toastMarkup()}
      ${modalMarkup()}
    </div>
  `;
}

function renderMessage(message) {
  if (message.role === "user") {
    return `<div class="chat-row user"><div class="bubble">${message.text}</div></div>`;
  }
  if (message.resultIds) {
    const leads = state.leads.filter((lead) => message.resultIds.includes(lead.id));
    const count = message.total || leads.length;
    const shown = leads.slice(0, 3);
    const copy = count > 3
      ? `已帮您找到最新3条${message.label}，如果您想看更多请`
      : `已帮您找到最新${count}条${message.label}`;
    return `
      <div class="chat-row assistant">
        <div>
          <p class="result-copy">${copy}${count > 3 ? `<button data-action="view-results" data-label="${message.label}" data-ids="${message.resultIds.join(",")}">查看全部</button>` : ""}</p>
          <div class="lead-list">${shown.map((lead) => leadCard(lead, { compact: true })).join("") || `<div class="empty-state"><p>暂未帮您找到相关线索，您可以尝试更换搜索条件。</p></div>`}</div>
        </div>
      </div>
    `;
  }
  return `<div class="chat-row assistant"><div class="bubble">${message.text}</div></div>`;
}

function detailPage(id) {
  const lead = findLead(id) || state.leads[0];
  return `
    <div class="app-screen">
      <div class="scroll-page">
        ${topNav("线索详情", { back: "go-back-list", right: `<button class="filter-link" data-action="dial" data-id="${lead.id}">${icon("phone")}拨号</button>` })}
        <main class="detail-content">
          <section class="section-card">
            <div class="section-head"><span>基本信息</span><span class="link">${lead.leadStatus}</span></div>
            <div class="kv-list">
              ${kv("线索编号", lead.code)}
              ${kv("业务类型", lead.businessType)}
              ${kv("线索主责", lead.owner)}
              ${kv("I/S ITCode", "pengcheng")}
              ${kv("O/S ITCode", "--")}
              ${kv("线索创建时间", formatDateTime(lead.createdAt))}
              ${kv("线索分配时间", formatDateTime(lead.assignedAt))}
              ${kv("业务归属", "战区销售")}
              ${kv("活动名称", "联系人挖掘")}
            </div>
          </section>

          <section class="section-card">
            <div class="section-head"><span>客户信息</span><span>${lead.name}</span></div>
            <div class="kv-list">
              ${kv("第一联系人", lead.contactName)}
              ${kv("电话", lead.phone)}
              ${kv("职位", "销售副总裁")}
              ${kv("邮箱", "pengcheng@lenovo.com")}
            </div>
          </section>

          <section class="section-card">
            <div class="section-head">公用字段</div>
            <div class="kv-list">
              ${kv("线索来源一级", lead.source1)}
              ${kv("线索来源二级", lead.source2)}
              ${kv("线索来源三级", lead.source3)}
              ${kv("是否填写问卷", "否")}
            </div>
          </section>

          <section class="section-card">
            <div class="section-head"><span>渠道跟进记录</span><span class="link">1↓</span></div>
            <div class="timeline">
              <div class="timeline-item">
                <strong>${formatMonth(lead.updatedAt)}</strong><br />
                <a>${formatDateTime(lead.updatedAt)}</a><br />
                渠道用户 ${lead.owner} 反馈：${lead.feedbackStatus}；预计拜访时间 ${formatDate(lead.visitAt)}；拜访备注：${lead.note}
              </div>
            </div>
          </section>

          <section class="section-card">
            <div class="section-head">
              <span>渠道协同</span>
              <span class="link"><label><input type="radio" ${lead.acceptStatus === "接受" ? "checked" : ""} /> 接受</label> <label><input type="radio" ${lead.acceptStatus === "退回" ? "checked" : ""} /> 退回</label></span>
            </div>
            <div class="form-grid">
              <label class="field-line"><span>预计拜访时间</span><input value="${formatDate(lead.visitAt)}" readonly /></label>
              <label class="field-line"><span>拜访备注</span><textarea rows="1" readonly>${lead.note}</textarea></label>
              <label class="field-line"><span>退回原因</span><select><option>请选择退回原因</option><option>联系不上客户</option></select></label>
              <label class="field-line"><span>其他原因信息</span><input placeholder="请输入其他原因" /></label>
            </div>
          </section>
        </main>
      </div>
      <div class="detail-actions">
        <button class="cancel" data-action="return-lead" data-id="${lead.id}">退回</button>
        <button class="submit" data-action="submit-lead" data-id="${lead.id}">提交</button>
      </div>
      ${toastMarkup()}
      ${modalMarkup()}
    </div>
  `;
}

function kv(label, value) {
  return `<div class="kv-row"><span>${label}</span><span>${value}</span></div>`;
}

function modalMarkup() {
  if (!state.modal) return "";
  if (state.modal.type === "dial") {
    const lead = findLead(state.modal.id);
    if (!lead) return "";
    return `
      <div class="modal-backdrop" data-action="close-modal">
        <section class="dialer" data-stop>
          <small>系统拨号盘模拟</small>
          <strong>${lead.phone}</strong>
          <div class="dial-pad">${["1","2","3","4","5","6","7","8","9","*","0","#"].map((n) => `<span>${n}</span>`).join("")}</div>
          <div class="call-actions">
            <button class="call" data-action="toast" data-message="已模拟拨打 ${lead.contactName}">${icon("phone")}</button>
            <button class="hang" data-action="close-modal">${icon("x")}</button>
          </div>
        </section>
      </div>
    `;
  }
  if (state.modal.type === "filter") {
    const options = ["待跟进", "商机明确需求", "已反馈", "未反馈", "销售自拓", "渠道推荐"];
    return `
      <div class="modal-backdrop" data-action="close-modal">
        <section class="filter-panel" data-stop>
          <h3>筛选线索</h3>
          <div class="filter-options">
            ${options.map((option) => `<button class="${state.filters.status === option ? "active" : ""}" data-action="select-filter" data-value="${option}">${option}</button>`).join("")}
          </div>
          <div class="filter-actions">
            <button class="outline-action" data-action="clear-status-filter">清空</button>
            <button class="primary-action" data-action="close-modal">完成</button>
          </div>
        </section>
      </div>
    `;
  }
  return "";
}

function toastMarkup() {
  if (!state.toast) return "";
  if (state.toast.type === "push") {
    return `
      <div class="toast">
        <div class="app-logo"></div>
        <button data-action="open-new">
          <strong>联想同享新线索提醒</strong>
          <span>您有${state.toast.count}条新渠道线索，请及时跟进!</span>
        </button>
      </div>
    `;
  }
  return `
    <div class="toast">
      <div class="app-logo"></div>
      <button data-action="dismiss-toast">
        <strong>操作成功</strong>
        <span>${state.toast.message}</span>
      </button>
    </div>
  `;
}

function findLead(id) {
  return state.leads.find((lead) => lead.id === id);
}

function updateLead(id, patch) {
  const leads = state.leads.map((lead) => (lead.id === id ? { ...lead, ...patch } : lead));
  setState({ leads });
}

function patchedLeads(id, patch) {
  return state.leads.map((lead) => (lead.id === id ? { ...lead, ...patch } : lead));
}

function handleQuery(text) {
  const query = text.trim();
  if (!query) return;
  const result = queryLeads(query);
  const messages = [
    ...state.messages,
    { role: "user", text: query },
    {
      role: "assistant",
      label: result.label,
      resultIds: result.leads.map((lead) => lead.id),
      total: result.leads.length,
    },
  ];
  setState({
    messages,
    resultIds: result.leads.map((lead) => lead.id),
    resultLabel: result.label,
  });
  window.location.hash = "#/agent";
  requestAnimationFrame(() => {
    const scroll = document.querySelector("#agent-scroll");
    if (scroll) scroll.scrollTop = scroll.scrollHeight;
  });
}

function queryLeads(query) {
  const normalized = query.toLowerCase();
  let leads = [...state.leads];
  const labels = [];

  if (/北京师范|锤子|史丹利|重庆|问天|水贝|联想|广州|成都|上海|深圳/.test(query)) {
    const words = ["北京师范", "锤子", "史丹利", "重庆", "问天", "水贝", "联想", "广州", "成都", "上海", "深圳"];
    const word = words.find((item) => query.includes(item));
    leads = leads.filter((lead) => lead.name.includes(word));
    labels.push(`${word}相关线索`);
  }

  if (/王进|向日葵|诸葛亮|联系人|电话/.test(query)) {
    if (query.includes("王进")) leads = leads.filter((lead) => lead.contactName.includes("王进"));
    else if (query.includes("诸葛亮")) leads = leads.filter((lead) => lead.contactName.includes("诸葛亮"));
    else if (query.includes("向日葵")) leads = leads.filter((lead) => lead.contactName.includes("向日葵"));
    labels.push("联系人匹配线索");
  }

  if (/待跟进/.test(query)) {
    leads = leads.filter((lead) => lead.leadStatus === "待跟进");
    labels.push("待跟进客户线索");
  }

  if (/待反馈|未反馈/.test(query)) {
    leads = leads.filter((lead) => lead.isPendingFeedback || lead.acceptStatus === "未反馈");
    labels.push("待反馈线索");
  }

  if (/已反馈/.test(query)) {
    leads = leads.filter((lead) => lead.acceptStatus === "接受" && lead.feedbackStatus !== "未反馈");
    labels.push("已反馈线索");
  }

  if (/销售自拓|渠道推荐|标讯|智慧中国行|内部推荐|业务类型/.test(query)) {
    const types = ["销售自拓", "渠道推荐", "Martech-标讯", "智慧中国行", "内部推荐", "企业线索挖掘", "Martech-其他"];
    const type = types.find((item) => query.includes(item.replace("Martech-", "")) || query.includes(item));
    if (type) {
      leads = leads.filter((lead) => lead.businessType === type);
      labels.push(`${type}线索`);
    }
  }

  if (/今日|今天/.test(query) && /拜访|跟进/.test(query)) {
    const today = toDateKey(TODAY);
    leads = leads.filter((lead) => isSameDate(lead.visitAt, today));
    labels.push("今日拜访线索");
  } else if (/本月|六月|6月/.test(query) && /拜访|跟进/.test(query)) {
    leads = leads.filter((lead) => lead.visitAt.slice(0, 7) === "2026-06");
    labels.push("本月拜访线索");
  } else if (/上月/.test(query) && /拜访|跟进/.test(query)) {
    leads = leads.filter((lead) => lead.visitAt.slice(0, 7) === "2026-05");
    labels.push("上月拜访线索");
  }

  if (/长期|14日|未更新/.test(query)) {
    leads = leads.filter(isStaleLead);
    labels.push("长期未更新线索");
  }

  if (normalized.includes("new") || /新增|新线索|新渠道/.test(query)) {
    leads = leads.filter((lead) => lead.isNew);
    labels.push("新增线索");
  }

  if (!labels.length) {
    labels.push("相关线索");
  }

  const byVisit = /拜访|跟进计划/.test(query);
  leads.sort((a, b) => {
    const first = byVisit ? a.visitAt : a.assignedAt;
    const second = byVisit ? b.visitAt : b.assignedAt;
    return byVisit ? new Date(first) - new Date(second) : new Date(second) - new Date(first);
  });

  return { label: labels.join("、"), leads };
}

function simulatePush() {
  const freshId = `lead-${Date.now()}`;
  const freshLead = {
    ...initialLeads[4],
    id: freshId,
    name: "新渠道客户" + String(state.leads.filter((lead) => lead.name.startsWith("新渠道客户")).length + 1),
    code: "pjl" + String(Math.floor(Math.random() * 900000000 + 100000000)),
    assignedAt: "2026-06-30T09:41:00",
    createdAt: "2026-06-30T09:41:00",
    updatedAt: "2026-06-30T09:41:00",
    isNew: true,
    isPendingFeedback: true,
  };
  setState({
    leads: [freshLead, ...state.leads],
    newUnread: state.newUnread + 1,
    toast: { type: "push", count: state.newUnread + 1 },
  });
  window.setTimeout(() => {
    if (state.toast?.type === "push") setState({ toast: null });
  }, 5000);
}

function openNewList() {
  state.newUnread = 0;
  saveState();
  window.location.hash = "#/list/new";
}

function route() {
  const hash = window.location.hash || "#/";
  const parts = hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  if (!parts.length) return { page: "home" };
  if (parts[0] === "agent") return { page: "agent" };
  if (parts[0] === "visits") return { page: "visits" };
  if (parts[0] === "lead") return { page: "lead", id: parts[1] };
  if (parts[0] === "list") return { page: "list", category: parts[1] || "all" };
  return { page: "home" };
}

function render() {
  const current = route();
  if (current.page === "agent") app.innerHTML = agentPage();
  else if (current.page === "visits") app.innerHTML = visitPage();
  else if (current.page === "lead") app.innerHTML = detailPage(current.id);
  else if (current.page === "list") app.innerHTML = listPage(current.category);
  else app.innerHTML = homePage();
}

function navigateBackToList() {
  window.location.hash = state.returnRoute || "#/list/all";
}

function openLead(id) {
  const current = window.location.hash || "#/";
  const returnRoute = current.startsWith("#/lead") ? state.returnRoute || "#/list/all" : current;
  state.returnRoute = returnRoute;
  saveState();
  window.location.hash = `#/lead/${id}`;
}

document.addEventListener("click", (event) => {
  const stopNode = event.target.closest("[data-stop]");
  if (stopNode) return;

  const routeNode = event.target.closest("[data-route]");
  if (routeNode) {
    window.location.hash = routeNode.dataset.route;
    return;
  }

  const demoRouteNode = event.target.closest("[data-demo-route]");
  if (demoRouteNode) {
    window.location.hash = demoRouteNode.dataset.demoRoute;
    return;
  }

  const queryNode = event.target.closest("[data-demo-query]");
  if (queryNode) {
    handleQuery(queryNode.dataset.demoQuery);
    return;
  }

  const actionNode = event.target.closest("[data-action]");
  if (!actionNode) return;

  const action = actionNode.dataset.action;
  const id = actionNode.dataset.id;

  if (action === "go-home") window.location.hash = "#/";
  else if (action === "go-back-list") navigateBackToList();
  else if (action === "noop-tab") setState({ toast: { message: "该 Tab 在 Demo 中仅做展示，点击同享可返回首页。" } });
  else if (action === "open-menu") setState({ toast: { message: "菜单在 Demo 中不展开，可继续体验线索流程。" } });
  else if (action === "simulate-push") simulatePush();
  else if (action === "open-new") openNewList();
  else if (action === "open-lead") openLead(id);
  else if (action === "quick-status") event.stopPropagation();
  else if (action === "dial") {
    event.stopPropagation();
    setState({ modal: { type: "dial", id } });
  } else if (action === "open-filter") setState({ modal: { type: "filter" } });
  else if (action === "close-modal") setState({ modal: null });
  else if (action === "select-filter") setState({ filters: { ...state.filters, status: actionNode.dataset.value }, modal: null });
  else if (action === "clear-status-filter") setState({ filters: { ...state.filters, status: "" }, modal: null });
  else if (action === "clear-category-filter") window.location.hash = "#/list/all";
  else if (action === "select-date") setState({ selectedDate: actionNode.dataset.date });
  else if (action === "shift-calendar") shiftCalendar(Number(actionNode.dataset.direction || 1));
  else if (action === "toggle-calendar") setState({ calendarMode: state.calendarMode === "week" ? "month" : "week" });
  else if (action === "accept-lead") updateLead(id, { acceptStatus: "接受", isPendingFeedback: false, leadStatus: "待跟进", feedbackStatus: "联系上线索，约拜访", updatedAt: toDateKey(TODAY) + "T09:41:00" });
  else if (action === "return-lead") updateLead(id, { acceptStatus: "退回", isPendingFeedback: false, leadStatus: "待跟进", updatedAt: toDateKey(TODAY) + "T09:41:00" });
  else if (action === "submit-lead") {
    const returnRoute = state.returnRoute || "#/list/all";
    setState({
      leads: patchedLeads(id, { acceptStatus: "接受", isPendingFeedback: false, leadStatus: "已反馈", feedbackStatus: "线索需求内部讨论中", updatedAt: toDateKey(TODAY) + "T09:41:00" }),
      toast: { message: "线索协同信息已模拟提交，已返回线索列表。" },
    });
    window.location.hash = returnRoute;
  } else if (action === "view-results") {
    state.resultIds = actionNode.dataset.ids.split(",");
    state.resultLabel = actionNode.dataset.label;
    saveState();
    window.location.hash = "#/list/results";
  } else if (action === "toast") {
    setState({ modal: null, toast: { message: actionNode.dataset.message || "操作完成" } });
  } else if (action === "dismiss-toast") setState({ toast: null });
});

let touchStartX = 0;
let touchStartY = 0;
let pointerStartX = 0;
let pointerStartY = 0;

document.addEventListener("touchstart", (event) => {
  const zone = event.target.closest("[data-swipe-zone='calendar']");
  if (!zone || !event.touches.length) return;
  touchStartX = event.touches[0].clientX;
  touchStartY = event.touches[0].clientY;
}, { passive: true });

document.addEventListener("touchend", (event) => {
  const zone = event.target.closest("[data-swipe-zone='calendar']");
  if (!zone || !event.changedTouches.length) return;
  const endX = event.changedTouches[0].clientX;
  const endY = event.changedTouches[0].clientY;
  const dx = endX - touchStartX;
  const dy = endY - touchStartY;
  if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
  shiftCalendar(dx < 0 ? 1 : -1);
}, { passive: true });

document.addEventListener("pointerdown", (event) => {
  const zone = event.target.closest("[data-swipe-zone='calendar']");
  if (!zone) return;
  pointerStartX = event.clientX;
  pointerStartY = event.clientY;
});

document.addEventListener("pointerup", (event) => {
  const zone = event.target.closest("[data-swipe-zone='calendar']");
  if (!zone) return;
  const dx = event.clientX - pointerStartX;
  const dy = event.clientY - pointerStartY;
  if (Math.abs(dx) < 45 || Math.abs(dx) < Math.abs(dy) * 1.2) return;
  shiftCalendar(dx < 0 ? 1 : -1);
});

document.addEventListener("submit", (event) => {
  const form = event.target.closest("form");
  if (!form) return;
  event.preventDefault();
  const input = form.querySelector("input[name='query']");
  const text = input ? input.value : "";
  if (form.dataset.form === "home-query" && !text.trim()) {
    window.location.hash = "#/agent";
    return;
  }
  handleQuery(text);
  if (input) input.value = "";
});

window.addEventListener("hashchange", render);

function toDateKey(date) {
  const d = new Date(date);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function formatDate(iso) {
  if (!iso) return "--";
  const date = new Date(iso);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

function formatDateTime(iso) {
  if (!iso) return "--";
  const date = new Date(iso);
  return `${formatDate(iso)} ${String(date.getHours()).padStart(2, "0")}:${String(date.getMinutes()).padStart(2, "0")}:${String(date.getSeconds()).padStart(2, "0")}`;
}

function formatMonth(iso) {
  const date = new Date(iso);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}`;
}

function formatTitleDate(dateKey) {
  const date = new Date(dateKey + "T00:00:00");
  return `${date.getFullYear()}.${String(date.getMonth() + 1).padStart(2, "0")}.${String(date.getDate()).padStart(2, "0")}`;
}

document.querySelectorAll("[data-demo-route]").forEach((button) => {
  button.addEventListener("click", () => {
    window.location.hash = button.dataset.demoRoute;
  });
});

render();
