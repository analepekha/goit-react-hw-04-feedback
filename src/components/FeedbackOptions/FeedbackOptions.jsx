import PropTypes from 'prop-types';
import { Button, List } from './FeedbackOptions.styled'

export const FeedbackOptions = ({options, onLeaveFeedback}) =>{
        return (
            <List>
                {Object.keys(options).map(propName => (
                    <Button key={propName} onClick={() => onLeaveFeedback(propName)}>{ propName}</Button>
                ))}
            </List>
        )
}

FeedbackOptions.propTypes = {
    options: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad:  PropTypes.number.isRequired,
    }),
    onLeaveFeedback: PropTypes.func.isRequired,
}