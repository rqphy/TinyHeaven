import create from 'zustand'

export default create((set) =>
{
    return {
        messageId: 0,

        setMessageId: (id) =>
        {
            set(() =>
            {
                return { messageId: id }
            })
        }
    }
})