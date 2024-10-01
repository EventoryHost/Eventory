"use client";
import { useState } from "react";
import Link from "next/link";
type PageProps = {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
};
const Agreement = ({ setCurrentPage }: PageProps) => {
  const [checked, setIschecked] = useState(false);
  return (
    <div className="flex w-screen justify-center bg-[#F7F6F9]">
      <div className="mt-12 min-h-[66rem] w-[68.75rem] rounded-2xl bg-[#FFFFFF] pl-4 pr-8 pt-8">
        <div>
          <h2 className="mb-4 mt-2 font-poppins text-2xl font-bold text-[rgba(46,49,146,1)]">
            Terms And Conditions
          </h2>
          <h4 className="text-[rgba(19, 47, 65, 1)] mb-4 font-poppins font-bold">
            Your Agreement
          </h4>
        </div>
        <div className="h-[828px] w-[66.06rem]">
          <div className="scrollbar-rounded-xl absolute h-[828px] w-[66.06rem] overflow-y-scroll pl-12 pr-6 text-left text-gray-500">
            <p>Last Revised: August 14, 2024</p>
            <p>
              Welcome to www.lorem-ipsum.info. This site is provided as a
              service to our visitors and may be used for informational purposes
              only. Because the Terms and Conditions contain legal obligations,
              please read them carefully.&quot;
            </p>
            <h2>1. YOUR AGREEMENT</h2>
            <p>
              By using this Site, you agree to be bound by, and to comply with,
              these Terms and Conditions. If you do not agree to these Terms and
              Conditions, please do not use this site.&quot;
            </p>
            <p>
              PLEASE NOTE: We reserve the right, at our sole discretion, to
              change, modify or otherwise alter these Terms and Conditions at
              any time. Unless otherwise indicated, amendments will become
              effective immediately. Please review these Terms and Conditions
              periodically. Your continued use of the Site following the posting
              of changes and/or modifications will constitute your acceptance of
              the revised Terms and Conditions and the reasonableness of these
              standards for notice of changes. For your information, this page
              was last updated as of the date at the top of these terms and
              conditions.&quot;
            </p>
            <h2>2. PRIVACY</h2>
            <p>
              Please review our Privacy Policy, which also governs your visit to
              this Site, to understand our practices.&quot;
            </p>
            <h2>3. LINKED SITES</h2>
            <p>
              This Site may contain links to other independent third-party Web
              sites (&quot;Linked Sites&rdquo;). These Linked Sites are provided
              solely as a convenience to our visitors. Such Linked Sites are not
              under our control, and we are not responsible for and do not
              endorse the content of such Linked Sites, including any
              information or materials contained on such Linked Sites. You will
              need to make your own independent judgment regarding your
              interaction with these Linked Sites.&quot;
            </p>
            <h2>4. FORWARD LOOKING STATEMENTS</h2>
            <p>
              All materials reproduced on this site speak as of the original
              date of publication or filing. The fact that a document is
              available on this site does not mean that the information
              contained in such document has not been modified or superseded by
              events or by a subsequent document or filing. We have no duty or
              policy to update any information or statements contained on this
              site and, therefore, such information or statements should not be
              relied upon as being current as of the date you access this
              site.&quot;
            </p>
            <h2>5. DISCLAIMER OF WARRANTIES AND LIMITATION OF LIABILITY</h2>
            <h3>A.</h3>
            <p>
              THIS SITE MAY CONTAIN INACCURACIES AND TYPOGRAPHICAL ERRORS. WE DO
              NOT WARRANT THE ACCURACY OR COMPLETENESS OF THE MATERIALS OR THE
              RELIABILITY OF ANY ADVICE, OPINION, STATEMENT OR OTHER INFORMATION
              DISPLAYED OR DISTRIBUTED THROUGH THE SITE. YOU EXPRESSLY
              UNDERSTAND AND AGREE THAT: (i) YOUR USE OF THE SITE, INCLUDING ANY
              RELIANCE ON ANY SUCH OPINION, ADVICE, STATEMENT, MEMORANDUM, OR
              INFORMATION CONTAINED HEREIN, SHALL BE AT YOUR SOLE RISK; (ii) THE
              SITE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS
              AVAILABLE&quot; BASIS; (iii) EXCEPT AS EXPRESSLY PROVIDED HEREIN
              WE DISCLAIM ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR
              IMPLIED, INCLUDING, BUT NOT LIMITED TO IMPLIED WARRANTIES OF
              MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, WORKMANLIKE
              EFFORT, TITLE AND NON-INFRINGEMENT; (iv) WE MAKE NO WARRANTY WITH
              RESPECT TO THE RESULTS THAT MAY BE OBTAINED FROM THIS SITE, THE
              PRODUCTS OR SERVICES ADVERTISED OR OFFERED OR MERCHANTS INVOLVED;
              (v) ANY MATERIAL DOWNLOADED OR OTHERWISE OBTAINED THROUGH THE USE
              OF THE SITE IS DONE AT YOUR OWN DISCRETION AND RISK; and (vi) YOU
              WILL BE SOLELY RESPONSIBLE FOR ANY DAMAGE TO YOUR COMPUTER SYSTEM
              OR FOR ANY LOSS OF DATA THAT RESULTS FROM THE DOWNLOAD OF ANY SUCH
              MATERIAL.&quot;
            </p>
            <h3>B.</h3>
            <p>
              YOU UNDERSTAND AND AGREE THAT UNDER NO CIRCUMSTANCES, INCLUDING,
              BUT NOT LIMITED TO, NEGLIGENCE, SHALL WE BE LIABLE FOR ANY DIRECT,
              INDIRECT, INCIDENTAL, SPECIAL, PUNITIVE OR CONSEQUENTIAL DAMAGES
              THAT RESULT FROM THE USE OF, OR THE INABILITY TO USE, ANY OF OUR
              SITES OR MATERIALS OR FUNCTIONS ON ANY SUCH SITE, EVEN IF WE HAVE
              BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. THE FOREGOING
              LIMITATIONS SHALL APPLY NOTWITHSTANDING ANY FAILURE OF ESSENTIAL
              PURPOSE OF ANY LIMITED REMEDY.&quot;
            </p>
            <h2>6. EXCLUSIONS AND LIMITATIONS</h2>
            <p>
              SOME JURISDICTIONS DO NOT ALLOW THE EXCLUSION OF CERTAIN
              WARRANTIES OR THE LIMITATION OR EXCLUSION OF LIABILITY FOR
              INCIDENTAL OR CONSEQUENTIAL DAMAGES. ACCORDINGLY, OUR LIABILITY IN
              SUCH JURISDICTION SHALL BE LIMITED TO THE MAXIMUM EXTENT PERMITTED
              BY LAW.&quot;
            </p>
            <h2>7. OUR PROPRIETARY RIGHTS</h2>
            <p>
              This Site and all its Contents are intended solely for personal,
              non-commercial use. Except as expressly provided, nothing within
              the Site shall be construed as conferring any license under our or
              any third party's intellectual property rights, whether by
              estoppel, implication, waiver, or otherwise. Without limiting the
              generality of the foregoing, you acknowledge and agree that all
              content available through and used to operate the Site and its
              services is protected by copyright, trademark, patent, or other
              proprietary rights. You agree not to: (a) modify, alter, or deface
              any of the trademarks, service marks, trade dress (collectively
              &quot;Trademarks&quot;) or other intellectual property made
              available by us in connection with the Site; (b) hold yourself out
              as in any way sponsored by, affiliated with, or endorsed by us, or
              any of our affiliates or service providers; (c) use any of the
              Trademarks or other content accessible through the Site for any
              purpose other than the purpose for which we have made it available
              to you; (d) defame or disparage us, our Trademarks, or any aspect
              of the Site; and (e) adapt, translate, modify, decompile,
              disassemble, or reverse engineer the Site or any software or
              programs used in connection with it or its products and
              services.&quot;
            </p>
            <p>
              The framing, mirroring, scraping or data mining of the Site or any
              of its content in any form and by any method is expressly
              prohibited.&quot;
            </p>
            <h2>8. INDEMNITY</h2>
            <p>
              By using the Site web sites you agree to indemnify us and
              affiliated entities (collectively &quot;Indemnities&quot;) and
              hold them harmless from any and all claims and expenses, including
              (without limitation) attorney's fees, arising from your use of the
              Site web sites, your use of the Products and Services, or your
              submission of ideas and/or related materials to us or from any
              person's use of any ID, membership or password you maintain with
              any portion of the Site, regardless of whether such use is
              authorized by you.&quot;
            </p>
            <h2>9. COPYRIGHT AND TRADEMARK NOTICE</h2>
            <p>
              Except our generated dummy copy, which is free to use for private
              and commercial use, all other text is copyrighted.
              generator.lorem-ipsum.info © 2013, all rights reserved.&quot;
            </p>
            <h2>10. INTELLECTUAL PROPERTY INFRINGEMENT CLAIMS</h2>
            <p>
              It is our policy to respond expeditiously to claims of
              intellectual property infringement. We will promptly process and
              investigate notices of alleged infringement and will take
              appropriate actions under the Digital Millennium Copyright Act
              (&quot;DMCA&quot;) and other applicable intellectual property
              laws. Notices of claimed infringement should be directed to:
            </p>
            <p>
              generator.lorem-ipsum.info
              <br />
              126 Electric Ave
              <br />
              St. Louis, MO 63101
              <br />
              Email: contact@lorem-ipsum.info
            </p>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              className="form-checkbox h-5 w-5 text-blue-600"
              checked={checked}
              onChange={() => setIschecked(!checked)}
            />
            <span className="ml-2 text-sm text-gray-700">
              I have read and agree to the Terms and Conditions
            </span>
          </div>
          <div className="mb-6 flex items-center">
            <Link href="/">
              <button
                className="mx-2 text-blue-600 hover:underline"
                onClick={() => setCurrentPage(0)}
              >
                Back
              </button>
            </Link>
            {/* <Link href="/next-page"> */}
              <button
                className={`rounded bg-blue-600 px-4 py-2 font-bold text-white ${!checked ? "cursor-not-allowed opacity-50" : ""}`}
                disabled={!checked}
                onClick={() => setCurrentPage(prev => prev + 1)}

              >
                Next
              </button>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Agreement;