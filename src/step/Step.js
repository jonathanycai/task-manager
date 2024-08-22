import useStep from "./useStep";
import StepControls from "./StepControls";
import StepCheckBox from "./StepCheckbox";
import StepEdit from "./StepEdit";

function Step({ index }) {
    const {
        state: { editingStep },
    } = useStep();
    const isEditing = editingStep === index;

    return (
        <li className="step">
            {isEditing ? (
                <StepEdit index={index} />
            ) : (
                <>
                    <StepCheckBox index={index} />
                    <StepControls index={index} />
                </>
            )}
        </li>
    );
}

export default Step;