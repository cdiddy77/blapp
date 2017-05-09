declare namespace goog {
    function require(name: string): void;
    function provide(name: string): void;
    function isFunction(f: any): boolean;

    namespace string {
        let caseInsensitiveCompare: (a: string, b: string) => number;
    }

    namespace array {
        function remove(ar: string[], v: string): void;
    }

    namespace dom {
        function createDom(name: string, ns?: string, children?: any): HTMLElement;
    }

    namespace math {
        class Coordinate {
            x: number;
            y: number;
            constructor(x: number, y: number);

            static difference(a: Coordinate, b: Coordinate): Coordinate;
            static sum(a: Coordinate, b: Coordinate): Coordinate;
            static magnitude(a: Coordinate): number;
        }
    }
}

// export = Blockly;
// export as namespace Blockly;

declare namespace Blockly {
    let selected: any;
    function bindEvent_(node: any, eventName: string, target: any, fn: (e: any) => void): void;
    function genUid(): string;
    function terminateDrag_(): void;
    function mouseToSvg(e: Event, svg: Element): any;
    function svgResize(workspace: Blockly.Workspace): void;
    function hueToRgb(hue: number): string;

    let ALIGN_RIGHT: number;

    interface BlockDefinition {
        codeCard?: any;
        init: () => void;
        getVars?: () => any[];
        renameVar?: (oldName: string, newName: string) => void;
        customContextMenu?: any;

        // putting these functions here gets the compiler to 
        // be quiet, but actually these functions get stuck
        // on the block, not on the 
        mutationToDom?: () => any;
        domToMutation?: (xmlElement: any) => void;
        decompose?: (ws: Blockly.Workspace) => any;
        compose?: (block: Blockly.Block) => void;
        saveConnections?: (block: Blockly.Block) => void;
        updateShape_?: () => void;
    }

    const Blocks: {
        [index: string]: BlockDefinition;
    }

    class Generator {

        [index: string]: any;

        /**
         * Class for a code generator that translates the blocks into a language.
         * @param {string} name Language name of this generator.
         * @constructor
         */
        constructor(name: string);

        /**
         * Arbitrary code to inject into locations that risk causing infinite loops.
         * Any instances of '%1' will be replaced by the block ID that failed.
         * E.g. '  checkTimeout(%1);\n'
         * @type {?string}
         */
        INFINITE_LOOP_TRAP: string;

        /**
         * Arbitrary code to inject before every statement.
         * Any instances of '%1' will be replaced by the block ID of the statement.
         * E.g. 'highlight(%1);\n'
         * @type {?string}
         */
        STATEMENT_PREFIX: string;

        /**
         * Generate code for all blocks in the workspace to the specified language.
         * @param {Blockly.Workspace} workspace Workspace to generate code from.
         * @return {string} Generated code.
         */
        workspaceToCode(workspace: Blockly.Workspace): string;

        /**
         * Prepend a common prefix onto each line of code.
         * @param {string} text The lines of code.
         * @param {string} prefix The common prefix.
         * @return {string} The prefixed lines of code.
         */
        prefixLines(text: string, prefix: string): string;

        /**
         * Recursively spider a tree of blocks, returning all their comments.
         * @param {!Blockly.Block} block The block from which to start spidering.
         * @return {string} Concatenated list of comments.
         */
        allNestedComments(block: Blockly.Block): string;

        /**
         * Generate code for the specified block (and attached blocks).
         * @param {Blockly.Block} block The block to generate code for.
         * @return {string|!Array} For statement blocks, the generated code.
         *     For value blocks, an array containing the generated code and an
         *     operator order value.  Returns '' if block is null.
         */
        blockToCode(block: Blockly.Block): string | any[];

        /**
         * Generate code representing the specified value input.
         * @param {!Blockly.Block} block The block containing the input.
         * @param {string} name The name of the input.
         * @param {number} order The maximum binding strength (minimum order value)
         *     of any operators adjacent to "block".
         * @return {string} Generated code or '' if no blocks are connected or the
         *     specified input does not exist.
         */
        valueToCode(block: Blockly.Block, name: string, order: number): string;

        /**
         * Generate code representing the statement.  Indent the code.
         * @param {!Blockly.Block} block The block containing the input.
         * @param {string} name The name of the input.
         * @return {string} Generated code or '' if no blocks are connected.
         */
        statementToCode(block: Blockly.Block, name: string): string;

        /**
         * Add an infinite loop trap to the contents of a loop.
         * If loop is empty, add a statment prefix for the loop block.
         * @param {string} branch Code for loop contents.
         * @param {string} id ID of enclosing block.
         * @return {string} Loop contents, with infinite loop trap added.
         */
        addLoopTrap(branch: string, id: string): string;

        /**
         * The method of indenting.  Defaults to two spaces, but language generators
         * may override this to increase indent or change to tabs.
         * @type {string}
         */
        INDENT: string;

        /**
         * Comma-separated list of reserved words.
         * @type {string}
         * @private
         */
        RESERVED_WORDS_: string;

        /**
         * Add one or more words to the list of reserved words for this language.
         * @param {string} words Comma-separated list of words to add to the list.
         *     No spaces.  Duplicates are ok.
         */
        addReservedWords(words: string): void;

        /**
         * This is used as a placeholder in functions defined using
         * Blockly.Generator.provideFunction_.  It must not be legal code that could
         * legitimately appear in a function definition (or comment), and it must
         * not confuse the regular expression parser.
         * @type {string}
         * @private
         */
        FUNCTION_NAME_PLACEHOLDER_: string;

        /**
         * Define a function to be included in the generated code.
         * The first time this is called with a given desiredName, the code is
         * saved and an actual name is generated.  Subsequent calls with the
         * same desiredName have no effect but have the same return value.
         *
         * It is up to the caller to make sure the same desiredName is not
         * used for different code values.
         *
         * The code gets output when Blockly.Generator.finish() is called.
         *
         * @param {string} desiredName The desired name of the function (e.g., isPrime).
         * @param {!Array.<string>} code A list of Python statements.
         * @return {string} The actual name of the new function.  This may differ
         *     from desiredName if the former has already been taken by the user.
         * @private
         */
        provideFunction_(desiredName: string, code: string[]): string;

    }

    class JavaScriptGenerator extends Generator {
        ORDER_ATOMIC: number;
        ORDER_NEW: number;
        ORDER_MEMBER: number;
        ORDER_FUNCTION_CALL: number;
        ORDER_INCREMENT: number;
        ORDER_DECREMENT: number;
        ORDER_BITWISE_NOT: number;
        ORDER_UNARY_PLUS: number;
        ORDER_UNARY_NEGATION: number;
        ORDER_LOGICAL_NOT: number;
        ORDER_TYPEOF: number;
        ORDER_VOID: number;
        ORDER_DELETE: number;
        ORDER_DIVISION: number;
        ORDER_MULTIPLICATION: number;
        ORDER_MODULUS: number;
        ORDER_SUBTRACTION: number;
        ORDER_ADDITION: number;
        ORDER_BITWISE_SHIFT: number;
        ORDER_RELATIONAL: number;
        ORDER_IN: number;
        ORDER_INSTANCEOF: number;
        ORDER_EQUALITY: number;
        ORDER_BITWISE_AND: number;
        ORDER_BITWISE_XOR: number;
        ORDER_BITWISE_OR: number;
        ORDER_LOGICAL_AND: number;
        ORDER_LOGICAL_OR: number;
        ORDER_CONDITIONAL: number;
        ORDER_ASSIGNMENT: number;
        ORDER_COMMA: number;
        ORDER_NONE: number;
    }

    const JavaScript: JavaScriptGenerator;

    class Field {
        name: string;
        EDITABLE: boolean;
        init(block: Block): void;
        static superClass_: Field;
        getText(): string;
        setText(newText: any): void;
        updateEditable(): void;
    }

    class FieldVariable extends Field {
        constructor(d: any);
    }

    class FieldCheckbox extends Field {
        constructor(val: string);
        static CHECK_CHAR: string;
    }

    class FieldTextInput extends Field {
        constructor(text: string, validator: any);
        static numberValidator: any;
    }

    class FieldDropdown extends Field {
        constructor(val: any[][] | (() => any[][]));
    }
    class FieldImage extends Field {
        constructor(url: string, width: number, height: number, def: string);
    }
    class FieldNumber extends Field {
        constructor(v: number, min?: number, max?: number, precision?: number);
    }
    class FieldColour extends Field {
        constructor(v: string);
    }

    class Block {
        static obtain(workspace: Workspace, prototypeName?: string): Block;

        // May allow downcasting (see below).
        type: string;
        id: string;
        isShadow_: boolean;
        nextConnection: Connection;
        outputConnection: Connection;
        previousConnection: Connection;
        workspace: Workspace;
        valueConnection_?: any;

        // CPROP : When everything is working, get rid of itemCount_
        mutateInfo_?: any;


        // Returns null if the field does not exist on the specified block.
        getFieldValue(field: string): string;
        // Returns null if the input does not exist on the specified block, or
        // is disconnected.
        getInputTargetBlock(field: string): Block;
        getInputsInline(): boolean;
        // Returns null if no next block or is disconnected.
        getNextBlock(): Block;
        // Unplug this block from its superior block.  If this block is a statement, optionally reconnect the block underneath with the block on top.
        unplug(): void;

        moveBy(x: number, y: number): void;
        getHeightWidth(): { width: number; height: number; };
        getBoundingRectangle(): {
            topLeft: goog.math.Coordinate;
            bottomRight: goog.math.Coordinate;
        }

        getSurroundParent(): Block;

        svgGroup_: SVGElement;
        parentBlock_: Block;
        inputList: Input[];
        disabled: boolean;
        comment: string | Comment;

        appendDummyInput(opt_name?: string): Input;
        appendStatementInput(name: string): Input;
        appendValueInput(name: string): Input;
        getChildren(): Block[];
        getColour(): string;
        getDescendants(): Block[];
        getInput(input: string): Input;
        initSvg(): void;
        removeInput(name: string, opt_quiet?: boolean): void;
        dispose(healGap: boolean): void;
        setCollapsed(collapsed: boolean): void;
        setColour(colour: number | string): void;
        setCommentText(text: string): void;
        setConnectionsHidden(hidden: boolean): void;
        setDeletable(deletable: boolean): void;
        setDisabled(disabled: boolean): void;
        setEditable(editable: boolean): void;
        setFieldValue(newValue: string, name: string): void;
        setHelpUrl(url: string): void;
        setInputsInline(newBoolean: boolean): void;
        setMovable(movable: boolean): void;
        setMutator(mutator: Mutator): void;
        setNextStatement(newBoolean: boolean, opt_check?: string | string[]): void;
        setOutput(newBoolean: boolean, opt_check?: string | string[]): void;
        setParent(newParent: Block): void;
        setPreviousStatement(newBoolean: boolean, opt_check?: string | string[]): void;
        setShadow(shadow: boolean): void;
        setTitleValue(newValue: string, name: string): void;
        setTooltip(newTip: string | (() => void)): void;
        // Passing null will delete current text
        setWarningText(text: string): void;
    }

    class Comment extends Icon {
        constructor(b: Block);

        dispose(): void;
        getBubbleSize(): { width: number, height: number };
        getText(): string;
        setBubbleSize(width: number, height: number): void;
        setText(text: string): void;
    }

    class Warning extends Icon {
    }

    class Icon {
        constructor(block: Block);

        collapseHidden: boolean;

        computeIconLocation(): void;
        createIcon(): void;
        dispose(): void;
        getIconLocation(): goog.math.Coordinate;
        isVisible(): boolean;
        setVisible(visible: boolean): void;
        renderIcon(cursorX: number): number;
        setIconLocation(xy: goog.math.Coordinate): void;
        updateColour(): void;
        updateEditable(): void;
    }

    // if type == controls_if
    class IfBlock extends Block {
        elseifCount_: number;
        elseCount_: number;
    }

    class Input {
        constructor(type: number, name: string, source: Block, target: Connection);
        name: string;
        connection: Connection;
        sourceBlock_: Block;
        fieldRow: Field[];

        appendField(field: Field | string, opt_name?: string): Input;
        appendTitle(field: any, opt_name?: string): Input;
        dispose(): void;
        init(): void;
        isVisible(): boolean;
        removeField(name: string): void;
        setAlign(align: number): Input;
        setCheck(check: string | string[]): Input;
        setVisible(visible: boolean): Block;
    }

    class Connection {
        constructor(b: Block, type: number);
        check_: string[];
        targetConnection: Connection;
        sourceBlock_: Block;
        targetBlock(): Block;
        connect(otherConnection: Connection): void;
        disconnect(): void;
    }

    // if type is one of "procedures_def{,no}return", or "procedures_call{,no}return"
    class DefOrCallBlock extends Block {
        arguments_: string[];
    }

    interface BlocklyEvent {
        type: string;
        blockId?: string;
        workspaceId: string;
        recordUndo: boolean;
        element?: string;
        oldValue?: string;
        newValue?: string;
        name?: string;
        xml?: any;
        group?: string;
    }

    class Mutator extends Icon {
        /**
         * @param quarkNames: list of sub_blocks for toolbox in mutator workspace
         */
        constructor(quarkNames: string[]);

        static reconnect(connectionChild: Connection, block: Block, inputName: string): boolean;
        dispose(): void;
    }

    class ScrollbarPair {
        hScroll: Scrollbar;
        vScroll: Scrollbar;
        resize(): void;
    }

    class Scrollbar {
        svgHandle_: Element;
        ratio_: number;
        set(x: number): void;
    }

    class Workspace {
        svgGroup_: any;
        scrollbar: ScrollbarPair;
        svgBlockCanvas_: SVGGElement;

        variableList:string[];

        newBlock(prototypeName: string, opt_id?: string): Block;
        render(): void;
        clear(): void;
        dispose(): void;
        getTopBlocks(ordered: boolean): Block[];
        getBlockById(id: string): Block;
        getAllBlocks(): Block[];
        traceOn(armed: boolean): void;
        addChangeListener(f: (e: BlocklyEvent) => void): callbackHandler;
        removeChangeListener(h: callbackHandler): void;
        registerToolboxCategoryCallback(catName: string, cb: (w: Workspace) => Element[]): void;
        registerButtonCallback(cbName: string, cb: (button: any) => any): void;
        updateToolbox(newTree: Element | string): void;
        getCanvas(): any;
        getParentSvg(): Element;
        zoom(x: number, y: number, type: number): void;
        highlightBlock(id: string): void;
        undo(): void;
        redo(): void;
        clearUndo(): void;
        isDragging(): boolean;
        getMetrics(): {
            absoluteLeft: number;
            absoluteTop: number;
            contentHeight: number;
            contentLeft: number;
            contentTop: number;
            contentWidth: number;
            viewHeight: number;
            viewLeft: number;
            viewTop: number;
            viewWidth: number;
        }
    }

    class WorkspaceSvg {
        moveDrag(e: Event): goog.math.Coordinate;
        showContextMenu_(e: Event): void;
    }

    namespace Xml {
        function domToText(dom: Element): string;
        function domToPrettyText(dom: Element): string;
        function domToWorkspace(dom: Element, workspace: Workspace): void;
        function textToDom(text: string): Element;
        function workspaceToDom(workspace: Workspace): Element;
    }

    namespace Extensions {
        var MUTATOR_PROPERTIES_: string[];
        function register(a: any, b: any): any;
        function registerMixin(a: any, b: any): any;
        function registerMutator(a: any, b: any, c: any, d: any): any;
        function apply(a: any, b: any, c: any): any;
        function checkHasFunction_(a: any, b: any, c: any): any;
        function checkNoMutatorProperties_(a: any, b: any): any;
        function checkMutatorDialog_(a: any, b: any): boolean;
        function checkBlockHasMutatorProperties_(a: any, b: any): any;
        function getMutatorProperties_(a: any): any;
        function mutatorPropertiesMatch_(a: any, b: any): boolean;
        function buildTooltipForDropdown(a: any, b: any): any;
        function checkDropdownOptionsInTable_(a: any, b: any, c: any): any;
        function buildTooltipWithFieldValue(a: any, b: any): any;
        function extensionParentTooltip_(): any;
    }

    interface Options {
        readOnly?: boolean;
        toolbox?: Element | string;
        trashcan?: boolean;
        collapse?: boolean;
        comments?: boolean;
        disable?: boolean;
        scrollbars?: boolean;
        sound?: boolean;
        css?: boolean;
        media?: string;
        grid?: {
            spacing?: number;
            length?: number;
            colour?: string;
            snap?: boolean;
        };
        zoom?: {
            enabled?: boolean;
            controls?: boolean;
            wheel?: boolean;
            maxScale?: number;
            minScale?: number;
            scaleSpeed?: number;
        };
        enableRealTime?: boolean;
        rtl?: boolean;
    }

    // tslint:disable-next-line
    interface callbackHandler { }

    function inject(elt: Element, options?: Options): Workspace;

    function createSvgElement(tag: string, options: any, fg: any): any;

    namespace Names {
        function equals(old: string, n: any): boolean;
    }

    namespace Variables {
        function allVariables(wp: Workspace): string[];
        let flyoutCategory: (wp: Workspace) => HTMLElement[];
    }

    namespace ContextMenu {
        interface MenuItem {
            enabled?: boolean;
            text?: string;
            callback?: () => void;
        }

        function callbackFactory(block: Block, xml: HTMLElement): void;
        function show(e: any, menu: MenuItem[], rtl: boolean): void;
    }

    namespace Msg {
        const VARIABLES_DEFAULT_NAME: string;
        const VARIABLES_SET_CREATE_GET: string;
        const CONTROLS_FOR_INPUT_DO: string;
        const CONTROLS_FOR_TOOLTIP: string;
        const UNDO: string;
        const REDO: string;
        const COLLAPSE_ALL: string;
        const EXPAND_ALL: string;
        const DELETE_BLOCK: string;
        const DELETE_X_BLOCKS: string;
        const DELETE_ALL_BLOCKS: string;
    }

    namespace BlockSvg {
        let START_HAT: boolean;
    }

    namespace Events {
        const CREATE: string;
        const DELETE: string;
        const CHANGE: string;
        const MOVE: string;
        const UI: string;
        function setGroup(group: any): void;
    }

    namespace Toolbox {
        class TreeNode {
            isUserCollapsible_: boolean;

            getChildCount(): number;
            getParent(): TreeNode;
            getTree(): TreeControl;
            hasChildren(): boolean;
            isSelected(): boolean;
            onMouseDown(e: Event): void;
            select(): void;
            setExpanded(expanded: boolean): void;
            toggle(): void;
            updateRow(): void;
        }

        class TreeControl {
            selectedItem_: TreeNode;

            getSelectedItem(): TreeNode;
            setSelectedItem(t: TreeNode): void;
        }
    }

}
