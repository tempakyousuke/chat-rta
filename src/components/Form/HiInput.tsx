import React from "react";

type InputProps = {
  labelCols: string | number;
  requiredLabel: boolean;
  label: string;
  value: string;
  errorMessage: string;
  invalid: boolean;
  disabled: boolean;
  type: string;
  handleChange: Function;
  placeholder: string;
};

class HiInput extends React.Component<InputProps, {}> {
  static defaultProps = {
    labelCols: "",
    requiredLabel: false,
    label: "",
    errorMessage: "",
    invalid: false,
    disabled: false,
    type: "text",
    placeholder: "",
  };

  constructor(props: InputProps) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  get labelClass(): string {
    if (this.props.labelCols) {
      return `sm:col-span-${this.props.labelCols}`;
    } else {
      return "sm:col-span-12";
    }
  }

  get requiredLabel(): JSX.Element {
    if (this.props.requiredLabel) {
      return <div className="px-3 mr-3 text-white bg-amber-900">必須</div>;
    }
  }

  get inputWrapClass(): string {
    if (this.props.labelCols) {
      let cols = this.props.labelCols;
      if (typeof cols === "string") {
        cols = parseInt(cols);
      }
      const col = 12 - cols;
      return `col-span-12 sm:col-span-${col}`;
    } else {
      return "col-span-12 sm:col-span-12";
    }
  }

  get errorMessage(): JSX.Element {
    if (this.haveError) {
      return (
        <p className="text-xs italic text-red-500">{this.props.errorMessage}</p>
      );
    }
  }

  get haveError(): boolean {
    return this.props.invalid && !this.props.disabled;
  }

  get inputClass(): string {
    let inputClass =
      "appearance-none border rounded w-full p-4 text-gray-700 leading-tight focus:outline-none";
    if (this.haveError) {
      inputClass += " border-red-500";
    }
    if (this.props.invalid) {
      inputClass += " focus:shadow-outline";
    }
    return inputClass;
  }

  handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.props.handleChange(event.target.value);
  }

  render(): JSX.Element {
    return (
      <div className="grid grid-cols-12">
        <label
          className={
            "block text-sm flex items-center col-span-12 " + this.labelClass
          }
        >
          {this.requiredLabel}
          {this.props.label}
        </label>
        <div className={"col-span-12 " + this.inputWrapClass}>
          <input
            value={this.props.value}
            className={this.inputClass}
            type={this.props.type}
            onChange={this.handleChange}
            placeholder={this.props.placeholder}
          />
          {this.errorMessage}
        </div>
      </div>
    );
  }
}

export default HiInput;
