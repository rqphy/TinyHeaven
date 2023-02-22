import create from 'zustand'

export default create((set) =>
{
    return {
        messageId: -1,

        setMessageId: (id) =>
        {
            set(() =>
            {
                return { messageId: id }
            })
        }
    }
})