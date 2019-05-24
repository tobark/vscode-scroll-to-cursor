import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand(
		'scroll-to-cursor.scroll',
		() => {
			scroll();
		}
	);
	context.subscriptions.push(disposable);
}

async function scroll() {
	const activeTextEditor = vscode.window.activeTextEditor;
	if (activeTextEditor) {
		const currentLineNumber = activeTextEditor.selection.start.line;
		await vscode.commands.executeCommand('revealLine', {
			lineNumber: currentLineNumber,
			at: 'top',
		});
		console.log('Scrolled');
	} else {
		console.error('No active text editor!');
	}
}

export function deactivate() {}
