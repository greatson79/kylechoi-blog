(() => {
  "use strict";

  // 같은 폴더의 steps.json을 먼저 읽고, 못 읽을 때만 아래 기본 목록을 보여 줍니다.
  const fallbackSteps = {
    schema_version: "1.0",
    total: 10,
    steps: [
      { id: 0, title: "컴퓨터·저장 공간·권한 검사", command: "설치 창이 자동으로 진행합니다", pass_conditions: ["설치 창에 단계 완료가 표시됩니다"], failure_guidance: "화면 사진과 함께 문의해 주세요." },
      { id: 1, title: "Claude Code 설치·버전 확인", command: "설치 창이 자동으로 진행합니다", pass_conditions: ["설치 창에 단계 완료가 표시됩니다"], failure_guidance: "화면 사진과 함께 문의해 주세요." },
      { id: 2, title: "Claude 로그인(설치 창에서 진행)", command: "설치 창이 자동으로 진행합니다", pass_conditions: ["설치 창에 단계 완료가 표시됩니다"], failure_guidance: "화면 사진과 함께 문의해 주세요." },
      { id: 3, title: "Wave Terminal 내려받기·지문 확인", command: "설치 창이 자동으로 진행합니다", pass_conditions: ["설치 창에 단계 완료가 표시됩니다"], failure_guidance: "화면 사진과 함께 문의해 주세요." },
      { id: 4, title: "사용자 폴더에 설치·명령 연결", command: "설치 창이 자동으로 진행합니다", pass_conditions: ["설치 창에 단계 완료가 표시됩니다"], failure_guidance: "화면 사진과 함께 문의해 주세요." },
      { id: 5, title: "지침 팩 설치·지문 확인", command: "설치 창이 자동으로 진행합니다", pass_conditions: ["설치 창에 단계 완료가 표시됩니다"], failure_guidance: "화면 사진과 함께 문의해 주세요." },
      { id: 6, title: "백그라운드 서비스 등록", command: "설치 창이 자동으로 진행합니다", pass_conditions: ["설치 창에 단계 완료가 표시됩니다"], failure_guidance: "화면 사진과 함께 문의해 주세요." },
      { id: 7, title: "세 칸(master·cso·worker) 자동으로 깨우기", command: "설치 창이 자동으로 진행합니다", pass_conditions: ["설치 창에 단계 완료가 표시됩니다"], failure_guidance: "화면 사진과 함께 문의해 주세요." },
      { id: 8, title: "세 칸·지침 다시 확인", command: "설치 창이 자동으로 진행합니다", pass_conditions: ["설치 창에 단계 완료가 표시됩니다"], failure_guidance: "화면 사진과 함께 문의해 주세요." },
      { id: 9, title: "마무리·안내", command: "설치 창이 자동으로 진행합니다", pass_conditions: ["설치 창에 단계 완료가 표시됩니다"], failure_guidance: "화면 사진과 함께 문의해 주세요." }
    ]
  };

  const commands = {
    mac: {
      label: "Mac · 터미널에 붙여넣기",
      command: 'curl -fsSL https://waveainetworks.com/mac | bash'
    },
    windows: {
      label: "Windows · PowerShell에 붙여넣기",
      command: 'irm https://waveainetworks.com/win | iex'
    }
  };

  const commandNode = document.querySelector("#install-command");
  const labelNode = document.querySelector("#command-label");
  const copyButton = document.querySelector("#copy-command");
  const copyStatus = document.querySelector("#copy-status");
  const stepsList = document.querySelector("#steps-list");
  const sourceStatus = document.querySelector("#steps-source-status");

  function setOS(os) {
    const selected = commands[os] || commands.mac;
    commandNode.textContent = selected.command;
    labelNode.textContent = selected.label;
    document.querySelectorAll(".os-tab").forEach((button) => {
      const isActive = button.dataset.os === os;
      button.classList.toggle("is-active", isActive);
      button.setAttribute("aria-selected", String(isActive));
    });
    document.querySelectorAll("[data-os-panel]").forEach((panel) => {
      panel.hidden = panel.dataset.osPanel !== os;
    });
    copyStatus.textContent = "복사한 뒤 아래 순서대로 하세요.";
  }

  async function copyCommand() {
    const command = commandNode.textContent;
    try {
      await navigator.clipboard.writeText(command);
      copyButton.textContent = "복사됨";
      copyStatus.textContent = "복사했습니다. 이제 아래 순서대로 붙여넣으세요.";
    } catch (error) {
      copyStatus.textContent = "자동 복사에 실패했습니다. 명령을 직접 선택해 복사하세요.";
    }
    window.setTimeout(() => { copyButton.textContent = "복사"; }, 1800);
  }

  function isValidSteps(payload) {
    return Boolean(
      payload &&
      Array.isArray(payload.steps) &&
      payload.steps.length === 10 &&
      payload.steps.every((step) =>
        step &&
        Number.isInteger(step.id) &&
        typeof step.title === "string" &&
        typeof step.command === "string" &&
        Array.isArray(step.pass_conditions) &&
        typeof step.failure_guidance === "string"
      )
    );
  }

  function normalizeSteps(payload) {
    if (payload && payload.schema === "wave-install.steps.v1" && Array.isArray(payload.steps)) {
      return {
        schema_version: "1.0",
        total: payload.steps.length,
        steps: payload.steps.map((step) => ({
          id: step.index,
          title: step.title,
          command: step.command?.macos || "사용자 폴더 설치 단계",
          pass_conditions: (step.pass || []).map((condition) => {
            if (condition.message) return condition.message;
            if (condition.kind === "exit_code") return `exit code = ${condition.equals}`;
            if (condition.kind === "file_exists") return `파일 존재 · ${condition.path}`;
            if (condition.kind === "sha256") return `SHA256 확인 · ${condition.source}`;
            if (condition.kind === "count") return `개수 확인 · ${condition.equals}`;
            if (condition.kind === "json_path") return `JSON 확인 · ${condition.json_path}`;
            return condition.kind || "통과 조건 확인";
          }),
          failure_guidance: step.on_fail?.message || step.on_fail?.error_id || "오류 ID를 확인하세요."
        }))
      };
    }
    return payload;
  }

  function addText(parent, tag, text, className) {
    const node = document.createElement(tag);
    node.textContent = text;
    if (className) node.className = className;
    parent.appendChild(node);
    return node;
  }

  function renderSteps(payload) {
    stepsList.replaceChildren();
    payload.steps.forEach((step) => {
      const item = document.createElement("li");
      item.className = "step-item";
      const content = document.createElement("div");
      addText(content, "h3", step.title);
      addText(content, "p", step.command);
      const meta = document.createElement("div");
      meta.className = "step-meta";
      step.pass_conditions.forEach((condition) => addText(meta, "span", condition, /미측정|미검증|예외/.test(condition) ? "" : "pass"));
      addText(meta, "span", `실패 시 · ${step.failure_guidance}`);
      content.appendChild(meta);
      item.appendChild(content);
      stepsList.appendChild(item);
    });
  }

  async function loadSteps() {
    // 로컬 preview에서는 S3 산출물을 아직 복제하지 않으므로 404 요청을 만들지 않습니다.
    // 배포 호스트에서는 실제 steps.json을 먼저 읽고, 스키마가 맞을 때만 렌더합니다.
    const isLocalPreview = ["localhost", "127.0.0.1", "::1"].includes(window.location.hostname);
    const candidates = isLocalPreview ? [] : ["./steps.json"];
    for (const path of candidates) {
      try {
        const response = await fetch(path, { cache: "no-store" });
        if (!response.ok) continue;
        const payload = normalizeSteps(await response.json());
        if (!isValidSteps(payload)) continue;
        renderSteps(payload);
        sourceStatus.textContent = `steps.json 연결됨 · ${payload.steps.length}/10 단계`;
        sourceStatus.dataset.source = "remote";
        return;
      } catch (error) {
        // 다음 후보 경로 또는 로컬 fixture로 진행합니다.
      }
    }
    renderSteps(fallbackSteps);
    sourceStatus.textContent = "단계 목록을 불러오지 못해 기본 목록을 보여 드립니다.";
    sourceStatus.dataset.source = "default";
  }

  document.querySelectorAll(".os-tab").forEach((button) => {
    button.addEventListener("click", () => setOS(button.dataset.os));
  });
  copyButton.addEventListener("click", copyCommand);
  setOS("mac");
  loadSteps();
})();
