<template>
    <div class="editor">
        <!-- Tiptap 에디터를 렌더링하는 영역 -->
        <div class="menu-bar">
            <!-- 제목(H1~H3) 버튼 -->
            <button @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
                :class="{ 'is-active': editor?.isActive('heading', { level: 1 }) }">
                제목 1
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
                :class="{ 'is-active': editor?.isActive('heading', { level: 2 }) }">
                제목 2
            </button>
            <button @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
                :class="{ 'is-active': editor?.isActive('heading', { level: 3 }) }">
                제목 3
            </button>
            <button @click="editor.chain().focus().setParagraph().run()"
                :class="{ 'is-active': editor?.isActive('paragraph') }">
                본문
            </button>
            <button @click="editor.chain().focus().toggleBold().run()"
                :class="{ 'is-active': editor?.isActive('bold') }">
                굵게
            </button>
            <button @click="editor.chain().focus().toggleItalic().run()"
                :class="{ 'is-active': editor?.isActive('italic') }">
                기울임
            </button>
            <button @click="editor.chain().focus().toggleStrike().run()"
                :class="{ 'is-active': editor?.isActive('strike') }">
                취소선
            </button>
            <button @click="editor?.chain().focus().toggleBulletList().run()"
                :class="{ 'is-active': editor?.isActive('bulletList') }">
                글머리
            </button>
            <!-- 색상 변경 버튼 -->
            <button @click="changeTextColor('red')">빨강</button>
            <button @click="changeTextColor('blue')">파랑</button>
            <button @click="changeTextColor('green')">초록</button>
            <button @click="changeTextColor('black')">검정</button>
        </div>
        <editor-content :editor="editor"/>
    </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { Editor, EditorContent } from '@tiptap/vue-3'
import { StarterKit } from '@tiptap/starter-kit'
import TextStyle from '@tiptap/extension-text-style'
import Color from '@tiptap/extension-color'

export default {
    name: 'TiptapEditor',
    components: { EditorContent },
    props: {
        modelValue: String
    },
    emits: ["update:modelValue"],
    setup(props, { emit }) {
        // Editor 인스턴스를 ref로 관리
        const editor = ref(null)

        // 에디터 초기화
        onMounted(() => {
            editor.value = new Editor({
                extensions: [
                    // StarterKit : 기본 기능을 제공하는 스타터 키트
                    StarterKit.configure({ heading: { levels: [1, 2, 3] } }),  // heading: 제목 레벨 사용
                    TextStyle,
                    Color
                ],
                onUpdate: ({editor}) => {   // 구조분해할당
                    emit("update:modelValue", editor.getHTML())
                },
                content: props.modelValue || '<p>내용내용용</p>' // 초기 컨텐츠 설정
            })
        })

        // 부모가 v-model 값 변경 시(초기화 등), 에디터 내용도 업데이트
        watch(() => props.modelValue, (newValue) => {
            // 새로 입력된 값, 기존 값이 같은지 체크(현재는 사용 안해도 되지만 확장성 높이기 위해선 코드 참고)
            // const isSame = editor.value?.getHTML() === newValue;
            // if (editor.value && !isSame) {
                editor.value.commands.setContent(newValue, false);
            // }
        })

        // 에디터 종료 시 리소스 해제
        onBeforeUnmount(() => {
            editor.value?.destroy()
        })

        // 텍스트 색상 변경 함수
        const changeTextColor = (color) => {
            editor.value?.chain().focus().setColor(color).run()
        }

        return {
            editor, changeTextColor
        }
    }
}
</script>
<style scoped>
/* 에디터와 툴바 스타일링 */
.ProseMirror {
    min-height: 200px;
    border: 1px solid #ccc;
    padding: 10px;
}

.tiptap-menu-bar {
    background-color: #f5f5f5;
    border: 1px solid #ddd;
    padding: 5px;
}

.editor {
    border: 1px solid #ddd;
    padding: 10px;
    border-radius: 5px;
}

.menu-bar {
    display: flex;
    gap: 5px;
    margin-bottom: 10px;
}

button {
    padding: 5px 10px;
    border: none;
    background: #f0f0f0;
    cursor: pointer;
}

button.is-active {
    background: #007bff;
    color: white;
}
</style>