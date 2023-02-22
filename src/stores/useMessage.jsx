import create from 'zustand'

export default create((set) =>
{
    return {
        messageId: -1,
        messagesLength: 0,

        setMessageId: (id) =>
        {
            set(() =>
            {
                return { messageId: id }
            })
        },

        setMessagesLength: (id) =>
        {
            set(() =>
            {
                return { messagesLength: id }
            })
        }
    }
})