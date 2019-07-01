#!/usr/bin/env node

const program = require('commander')
const s3sync = require('jac-s3-sync-aws')

program
	.version('0.0.1')
	.option('-a, --access <access>', 'ACCESS_KEY name. required')
	.option('-s, --secret <secret>', 'SECRET_KEY name. required')
	.option('-b, --bucket <bucket>', 'Bucket name. required')
	.option('-d, --dir <dir>', 'Your folder')
	.option('-D, --dest <dest>', 'S3 Folder')
	.parse(process.argv)

// program.args < 0 代表沒有任何輸入
if (!program.access || !program.secret || !program.bucket) {
	program.outputHelp() // 輸出說明
	process.exit() // 關閉程式
}

s3sync(program.dir, program)

// console.log('Hello, %s.', program.access + program.secret + program.bucket)
