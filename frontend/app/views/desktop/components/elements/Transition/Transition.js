import { useTransition, animated } from 'react-spring'

export const Transition = ({children}) => {
    const transitions = useTransition((items), {
        from: { opacity: 0 },
        enter: { opacity: 1 },
        delay: 200,
        config: config.molasses,
      })

    return (
        <div style={{ display: 'flex' }}>
        {
            transitions(({ opacity }, item) => (
            <animated.div
            style={{
                opacity: opacity.to(item.op),
                transform: opacity
                .to(item.trans)
                .to(y => `translate3d(0,${y}px,0)`),
            }}>
            {children}
            </animated.div>
            ))
        }
        </div>
    )
}
