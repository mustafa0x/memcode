import { Editor } from '~/components/Editor';

class SeparateAnswerEdit extends React.Component {
  static propTypes = {
    problemContent: PropTypes.object.isRequired,
    updateProblemContent: PropTypes.func.isRequired,
    apiSave: PropTypes.func
  };

  static defaultProps = {
    apiSave: () => {}
  }

  updateProblemContent = (editorName, newEditorState) =>
    this.props.updateProblemContent({
      ...this.props.problemContent,
      [editorName]: newEditorState
    })

  onFocusChange = (ifFocused) => {
    if (ifFocused === false) {
      this.props.apiSave();
    }
  }

  render = () =>
    <section className="problem -withSeparateAnswer">
      <div className="first-column">
        <Editor
          placeholder="Enter a question"
          editorState={this.props.problemContent.content}
          updateEditorState={(newState) => this.updateProblemContent('content', newState)}
          onFocusChange={this.onFocusChange}
        />
      </div>

      <div className="second-column">
        <Editor
          placeholder="Enter an answer"
          editorState={this.props.problemContent.answer}
          updateEditorState={(newState) => this.updateProblemContent('answer', newState)}
          onFocusChange={this.onFocusChange}
        />
      </div>
    </section>
}

export { SeparateAnswerEdit };
